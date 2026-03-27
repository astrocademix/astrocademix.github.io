# AstroCademiX Combined Static Package

This package is a no-build GitHub Pages package.

## Structure

- `/` is the Clay-style entrance layer
- `/home/` is the Astro Darkness style home layer

## Deploy

Upload the contents of this folder to the root of your `astrocademix.github.io` repository and use **Deploy from a branch** with the root directory.

## Notes

- The entrance page loads the Clay blackhole video from the upstream repository asset URL.
- The starfield is implemented as a static Three.js port of Clay's rotating point-cloud background so it can run without a build step.
