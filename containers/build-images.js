const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Get list of directories in the current folder
function getDirectories(srcPath) {
  return fs
    .readdirSync(srcPath)
    .filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory());
}

const dirs = getDirectories(process.cwd());

dirs.forEach((dir) => {
  const dockerfilePath = path.join(process.cwd(), dir, "Dockerfile");

  // Check if Dockerfile exists in the directory
  if (fs.existsSync(dockerfilePath)) {
    const tagName = `cloudlet_alpine_${dir}`;
    const buildCommand = `docker build --no-cache -t ${tagName} ./${dir}`;

    // Execute the docker build command
    exec(buildCommand, (error) => {
      if (error) {
        console.error(`Error building ${dir}:`, error.message);
        return;
      }
    });

    console.log(`[+] Created image: ${tagName}`);
  }
});
