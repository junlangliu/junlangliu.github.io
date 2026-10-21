# Junlang Liu's personal website

A responsive academic website covering protein dynamics, statistical inference, AI for science, publications, education, and the scientific community.

## Edit the site

- `index.html`: biography, research, publications, background, and contact information.
- `assets/css/profile.css`: typography, colors, desktop/mobile layout, and print styles.
- `assets/js/profile.js`: publication filters. All content remains readable without JavaScript.
- `images/avatar.png`: existing portrait.

No framework, package installation, remote fonts, tracking scripts, or build dependencies are required.

## Build and preview

```sh
python3 scripts/build_static.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

Open `http://127.0.0.1:8765`.

The build copies only the explicit public-file list in `scripts/build_static.py`. The original Academic Pages template is preserved in the repository but excluded from the public build. No source CV, street address, telephone number, reference list, or unpublished manuscript list is distributed.

## Hosting

The GitHub Actions workflow builds pull requests without deploying them. A merge into `master` or a manual workflow run on `master` builds and deploys the public file list. For the first deployment, GitHub Pages must be configured to use **GitHub Actions** in the repository's Pages settings. This change does not itself change the Pages settings.

The minimal `_config.yml` also supports a conventional Jekyll branch build by excluding template/demo content. The recommended workflow is the explicit static build above.

## Content sources

- [Google Scholar](https://scholar.google.com/citations?user=sNlg69oAAAAJ&hl=en)
- [LinkedIn public profile](https://www.linkedin.com/in/junlang-liu-485832231)
- [Harvard lab profile](https://shakhnovich.faculty.chemistry.harvard.edu/people/junlang-liu)
- Journal and preprint links alongside each publication
- Education, teaching, honors, mentorship, and service supplied directly by Junlang

Publication metadata checked in October 2026. Public preprint titles take precedence over working manuscript titles. The published CoQ paper replaces its earlier preprint. Papers coauthored with Guosong Hong or Gengfeng Zheng are omitted from the selected research/publications section as requested. No citation totals are used for this curated selection.

Current appointment and affiliation should be added when supplied. Harvard is identified as doctoral training, not a current appointment.

## Template attribution

The repository originally used [Academic Pages](https://github.com/academicpages/academicpages.github.io), derived from Michael Rose's Minimal Mistakes theme. Original source files and the MIT license are retained.
