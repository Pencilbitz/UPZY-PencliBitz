import { build } from 'vite';

async function runBuild() {
  try {
    await build();
    console.log('Build successful!');
  } catch (error) {
    console.error('Build failed with detailed errors:');
    if (error.errors) {
      console.error(JSON.stringify(error.errors, null, 2));
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

runBuild();
