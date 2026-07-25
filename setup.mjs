#!/usr/bin/env node
/**
 * CivicPulse — one-command setup & launch.
 * Usage: node setup.mjs
 *
 * What this does:
 *  1. Installs backend deps, generates Prisma client, creates the local SQLite DB, seeds demo data
 *  2. Installs frontend deps
 *  3. Launches backend (port 5000) and frontend (port 3000) together
 *
 * Prerequisites: Node.js 18+ only. No database server, no Docker required.
 */

import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backendDir = path.join(__dirname, 'backend');
const frontendDir = path.join(__dirname, 'frontend');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';
const npxCmd = isWin ? 'npx.cmd' : 'npx';

function run(cmd, args, cwd) {
  console.log(`\n▶ ${cmd} ${args.join(' ')}  ${cwd ? `(in ${path.relative(__dirname, cwd) || '.'})` : ''}`);
  const result = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: isWin });
  if (result.status !== 0) {
    console.error(`\n❌ Command failed: ${cmd} ${args.join(' ')}`);
    process.exit(result.status ?? 1);
  }
}

async function main() {
  console.log('🚀 CivicPulse setup starting (SQLite mode — no database server needed)...\n');

  // Backend
  run(npmCmd, ['install'], backendDir);
  run(npxCmd, ['prisma', 'generate'], backendDir);
  run(npxCmd, ['prisma', 'db', 'push'], backendDir);
  run(npxCmd, ['prisma', 'db', 'seed'], backendDir);

  // Frontend
  run(npmCmd, ['install'], frontendDir);

  console.log('\n✅ Setup complete. Launching backend + frontend...\n');

  const backend = spawn(npmCmd, ['run', 'dev'], { cwd: backendDir, stdio: 'inherit', shell: isWin });
  const frontend = spawn(npmCmd, ['run', 'dev'], { cwd: frontendDir, stdio: 'inherit', shell: isWin });

  console.log('\n🌐 Backend:  http://localhost:5000');
  console.log('🌐 Frontend: http://localhost:3000\n');
  console.log('Press Ctrl+C to stop both servers.\n');

  const shutdown = () => {
    backend.kill();
    frontend.kill();
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main();
