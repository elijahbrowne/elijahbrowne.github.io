# Patient Privacy Rounds

An office scenario game: five coworkers each bring the learner one decision, with three possible answers, a reaction after every call, and an end-of-day score. The local build is ready to inspect. Hosting and LMS delivery still require destinations you control.

```
privacy-rounds/
  index.html          the game engine (never edited)
  scenario.js         the scenario content: every line, choice and rule
  art/                the office floor and the people
  track.js            optional tracking support; inactive by default
  config.js           blank tracking settings; the scenario works without them
  brand/              the logo, icons, and colour settings
  scorm/              the small launcher package for an LMS
```

## 1. Test the local scenario

Double-click `index.html`. Play the day once, including one right call and one wrong call, and reach the end-of-day headline.

*You should now see* the branded office, a coworker's reaction after each call, the shift lead walking over after a wrong call, and a final score.

## 2. Rehearse the hosted address

For real delivery, publish this complete folder to an HTTPS hosting destination you control. Then put that final public address in `scorm/config.js`:

```js
window.COURSE_URL = "https://your-host.example/index.html";
```

On Windows, build the zip after the real address is set:

```powershell
cd scorm
powershell -ExecutionPolicy Bypass -File .\zip.ps1
```

*You should now see* `privacy-rounds-scorm.zip`, with `imsmanifest.xml`, `index.html`, and `config.js` at the archive root. On Mac, create an equivalent zip with those same three files at the archive root.

The zip is a launcher: it points to the hosted scenario rather than carrying the scenario inside it.

## 3. Test in your LMS or SCORM test environment

Upload `privacy-rounds-scorm.zip` only to an LMS or SCORM test environment you are authorised to use, then launch it as a learner.

*You should now see* the scenario open inside the learning system. Confirm completion, score, and decision interactions in that specific system. Local success does not prove those LMS behaviors.

## 4. Edit carefully

The scenario content is all in `scenario.js`. Use Claude Code to make one change, save, open or refresh, and test it before making another. Keep the source documents authoritative.

For a hosted update, keep the game at the same stable HTTPS URL. After publishing a compatible visible change to that same address, relaunch the existing LMS item without rebuilding or re-uploading its SCORM zip. Confirm the visible change, completion, score, and interactions again. A local edit alone does not prove this behavior.

## Before real learners use it

Tracking is off by default. Do not add a destination or collect learner identity until you have a clear purpose, learner notice, appropriate access rules, and approval under your organisation's privacy process.
