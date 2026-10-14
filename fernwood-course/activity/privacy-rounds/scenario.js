/* ==================================================================
   SCENARIO CONTENT: the only file the skill writes.

   index.html (the office game engine) reads this file as
   `window.SCENARIO` and builds the whole day from it: the title card,
   five coworkers who each call the learner over with one request, the
   learner's three possible replies, the coworker's reaction, the shift
   lead's word after a wrong call, the sign over each desk, and the
   end-of-day headline. Never edit index.html. Everything is here.

   Rules that are not negotiable:
     - every placeholder written in double underscores must be gone;
     - five decisions, ids d1..d5 in order, each with three choices
       keyed a, b, c, and exactly one of them right:true;
     - a situation is 60 words or fewer, a choice 14 or fewer, a
       consequence 45 or fewer, a lead line 45 or fewer. Count them;
     - write every line the way a person says it out loud: contractions,
       whole sentences, no clipped fragments, no report-speak;
     - a situation is what the COWORKER SAYS to the learner, in the first
       person ("Jo, got a minute? A swap just came in..."), and `ask` is
       their question. Not a narrator, not a quiz stem;
     - a choice is what the learner says back to the coworker;
     - the consequence is ALSO the coworker speaking, and only the
       coworker. Right call (tone "good"): they say what they'll do and
       why it holds. Near miss (tone "soft"): half an hour has passed, so
       they say what happened and name the right call. Wrong call (tone
       "bad"): they simply go along with it ("Okay, I'll approve it now.")
       and teach nothing, because the shift lead is about to walk over;
     - every wrong call (tone "bad") carries a `lead` line: what the lead
       says when she walks over. She names what went wrong, the rule, and
       what to do next time, kindly;
     - every choice carries a `sign`, six words or fewer: what the office
       shows over that desk for the rest of the day after this call.
       Wrong and near-miss signs name the problem; a right call's sign
       names what held;
     - every right call traces to a line in the source documents, and no
       fact appears that is not in them. People in a request (the two
       workers in a swap, a customer) get first names the skill invents,
       introduced in the coworker's own line. A name is a stand-in; the
       rule behind the call is the fact;
     - the learner's own character is called "Jo" in every line. When the
       game runs with a learner name, the engine swaps "Jo" for it.
   ================================================================== */

window.SCENARIO = {
  id: "privacy-rounds",
  title: "Patient Privacy Rounds",
  brand: "FERNWOOD HEALTH CLINIC",
  logo: "brand/logo.svg",
  footer: "Patient Privacy Rounds at Fernwood Health Clinic. Fernwood and everyone in it are fictional.",

  /* The learner's character. Keep as is: the sprite files are in art/. */
  art: {
    character: "art/jo-walk.png",
    portrait: "art/jo-portrait.png",
    frameSize: [64, 80],
    characterName: "Jo"
  },

  people: {
    lead: { name: "Lena", role: "charge nurse" },
    coworkers: [
      { name: "Priya",  role: "front desk phones" },
      { name: "Theo",   role: "patient phone line" },
      { name: "Marcus", role: "rooming patients" },
      { name: "Maya",   role: "triage" },
      { name: "Owen",   role: "check-in desk" }
    ]
  },

  goal: {
    line: "Keep patient information safe on the floor.",
    how: [
      "Five coworkers will call you over, one at a time, each with one privacy question.",
      "Pick one of three replies. If you make a wrong call, Lena walks over to talk it through.",
      "Don't keep people waiting. Head over when someone calls you.",
      "Make four or more right calls and the floor holds."
    ],
    win:  "The floor held today.",
    lose: "A tough shift on the floor."
  },

  intro: {
    icon: "map",
    lede: "Welcome to Fernwood. Calm and steady, one call at a time.",
    paragraphs: [
      "You're Jo, a nurse at Fernwood Health Clinic. Patient information crosses your path all day: phones, printers, screens and the waiting room.",
      "Coworkers will call you over when they need a hand. Each time, pick one of three replies. One is right, one is a near miss, and one lets patient information slip.",
      "It takes about seven minutes."
    ],
    nameHint: "Nothing here is sent to your employer. When this scenario runs inside a learning system, the system fills this in for you and this box does not appear.",
    nameLabel: "Your name (optional)",
    namePlaceholder: "e.g. Sam Newhire",
    nameButton: "Use this name",
    startLabel: "Let's start"
  },

  decisions: [
    {
      id: "d1",
      icon: "phone",
      heading: "Call 1. A son asks about his mom",
      situation: "Jo, got a minute? Line 2 is a man named Daniel. He says his mom, Ruth, had blood work here last week. He's worried and wants her results. There's no signed release on file naming him.",
      ask: "What do I tell him?",
      choices: [
        { key: "a", text: "Share them. He's her son, and he sounds worried.", right: false, tone: "bad", sign: "Results shared without a release",
          consequence: "Okay. I'll read him her results now.",
          lead: "Jo, hold on. Being her son doesn't give access on its own. Family isn't automatic access. Don't confirm she's a patient. Tell him Ruth can call us, or sign a release at her next visit." },
        { key: "b", text: "Don't confirm she's a patient. Say Ruth can call us or sign a release.", right: true, tone: "good", sign: "Family isn't automatic access",
          consequence: "Got it. I won't confirm anything. I'll tell him his mom can call us herself, or sign a release naming him at her next visit. Family isn't automatic access." },
        { key: "c", text: "Tell him you can't say if she's a patient, then hang up.", right: false, tone: "soft", sign: "Caller left with no next step",
          consequence: "I said I couldn't tell him and hung up. He called back upset, and we lost half an hour. Nothing leaked, but he needed a next step: Ruth calls us, or signs a release." }
      ]
    },
    {
      id: "d2",
      icon: "person",
      heading: "Call 2. A caller says she's the patient",
      situation: "Jo, quick one. I've got a caller who says she's Grace Lin. She wants to go over her visit notes. I've pulled up Grace's chart, and I'm about to read her date of birth back to check it's her.",
      ask: "Is that the right way to do it?",
      choices: [
        { key: "a", text: "Ask her to say her full name and date of birth.", right: true, tone: "good", sign: "Two identifiers, every time",
          consequence: "Right. I'll ask her to say both, and I won't read them out. If either doesn't match, I'll offer a call back to the number on file. Two identifiers, every time." },
        { key: "b", text: "Yes, read it out. If she says yes, it's her.", right: false, tone: "bad", sign: "Date of birth read aloud",
          consequence: "Okay. I'll read it out and go ahead if she says yes.",
          lead: "Jo, a quick word. Anyone can say yes to a date we read out. Ask the caller to say her full name and date of birth. Two identifiers, every time. If either doesn't match, offer a call back." },
        { key: "c", text: "Put her on hold and check with Lena first.", right: false, tone: "soft", sign: "Caller left on hold",
          consequence: "I put her on hold to ask Lena. She was with a patient, and we lost half an hour. The answer was simple: ask the caller to say her name and date of birth." }
      ]
    },
    {
      id: "d3",
      icon: "folder",
      heading: "Call 3. Someone's charts in the printer",
      situation: "Jo, can you look at this? There's a stack of printed charts sitting in the shared printer tray. They're not mine. Patients walk past here on the way to the restroom.",
      ask: "What should I do with them?",
      choices: [
        { key: "a", text: "Carry them around the floor until you find whose they are.", right: false, tone: "soft", sign: "Charts carried round the floor",
          consequence: "I walked them round the floor for half an hour. Nobody claimed them. I should have read only the cover sheet, used the locked pickup bin, and messaged the team channel." },
        { key: "b", text: "Read through them to work out whose they are.", right: false, tone: "bad", sign: "Whole chart read to route it",
          consequence: "Okay. I'll read through them and figure out whose they are.",
          lead: "Jo, a quick word. Returning them is right, but reading the whole chart isn't. Read only what you need to route it: the cover sheet. Then lock them in the pickup bin and message the team." },
        { key: "c", text: "Check the cover sheet, lock them in the pickup bin, message the team.", right: true, tone: "good", sign: "Charts in the locked bin",
          consequence: "Got it. I'll read only the cover sheet, put them in the locked pickup bin beside the printer, and message the team channel. Read only what you need to route it." }
      ]
    },
    {
      id: "d4",
      icon: "chat",
      heading: "Call 4. Patient talk by the waiting room",
      situation: "Jo, I need a hand. Sam and Nadia are standing by the waiting room door, talking about a patient's diagnosis. People in the chairs can hear every word. They're good nurses, and it's their patient.",
      ask: "Should one of us say something?",
      choices: [
        { key: "a", text: "Leave it. It's their patient, so it's their call.", right: false, tone: "bad", sign: "Diagnosis heard in the waiting room",
          consequence: "Okay. I'll leave them to it.",
          lead: "Jo, a quick word. Discussing care is part of the job, but not by the waiting room. Speak up in the moment and suggest a private space, like the nurses' station. Move the talk inside." },
        { key: "b", text: "Step over now, keep it friendly, and suggest the nurses' station.", right: true, tone: "good", sign: "Talk moved inside",
          consequence: "Good call. I'll walk over now, keep it friendly, and suggest the nurses' station. They can finish there, where the waiting room can't hear. Move the talk inside." },
        { key: "c", text: "Tell Dana, the Privacy Officer, about it after the shift.", right: false, tone: "soft", sign: "Talk carried on by the door",
          consequence: "I wrote it up for Dana, but nobody spoke up at the time. They kept talking for another half hour. Speak up in the moment first. Dana is for when it keeps happening." }
      ]
    },
    {
      id: "d5",
      icon: "lock",
      heading: "Call 5. An unlocked screen with a record",
      situation: "Jo, over here. Ana's workstation by check-in is unlocked, and a patient's record is open on the screen. She stepped away a few minutes ago. Patients are lining up right in front of it.",
      ask: "What do I do about it?",
      choices: [
        { key: "a", text: "Lock it with Windows + L, and tell Ana when she's back.", right: true, tone: "good", sign: "Screen locked",
          consequence: "Got it. I'll press Windows + L, so her work stays as she left it, and tell Ana when she's back. Step away, lock it." },
        { key: "b", text: "Close the record, so nobody can read it.", right: false, tone: "bad", sign: "Record closed, computer left open",
          consequence: "Okay. I'll close her record now.",
          lead: "Jo, a quick word. Don't close someone else's work, and closing it still leaves the computer logged in. Lock it with Windows + L, then tell Ana when she's back. Step away, lock it." },
        { key: "c", text: "Stand guard by the screen until Ana comes back.", right: false, tone: "soft", sign: "Waited by an open screen",
          consequence: "I stood by her screen for half an hour until Ana got back. One key would have done it: lock it with Windows + L, then tell her when she's back." }
      ]
    }
  ],

  finish: {
    icon: "trophy",
    heading: "You're done",
    celebration: "That's a clean floor. Every call held, and every patient's information stayed between us.",
    mixed: "Most of your calls held. Look again at the ones that slipped, and the rule behind each.",
    rough: "That was a hard shift, and that's what practice is for. Review the Front Desk Privacy Rules and try again.",
    recapTitle: "Here are your five calls, side by side with the right ones.",
    closing: "Not sure on a call? Ask Dana Whitfield, the Privacy Officer. If you think information was shared by mistake, tell her the same day. Reporting your own mistake carries no penalty.",
    yourCallLabel: "Your call",
    rightCallLabel: "Right call"
  }
};
