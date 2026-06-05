module.exports = {
  apps: [
    {
      name: 'farm-guard',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/farm-guard',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
