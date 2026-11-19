export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type GuideSeo = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  imageAlt: string;
  image?: { src: string; width: number; height: number };
};

export type Guide = {
  slug: string;
  title: string;
  topic: string;
  summary: string;
  answer: string[];
  figure?: { src: string; alt: string };
  essentialsHeading?: string;
  essentials?: string[];
  mistakeHeading?: string;
  mistake?: string[];
  actionHeading?: string;
  action?: string[];
  related?: { href: string; label: string; text: string };
  cta?: {
    title: string;
    paragraphs: string[];
    preview?: string;
  };
  reference?: string;
  seo?: GuideSeo;
  body?: GuideBlock[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-play-pickleball",
    title: "How to play pickleball: a beginner’s guide",
    topic: "Meet the game",
    summary:
      "Two or four players hit a ball over a net with paddles. A rally starts with a serve and two required bounces.",
    answer: [
      "Pickleball is a paddle sport played as singles—one player on each side—or doubles, with two players per side. Hit the ball over the net, keep it inside the court, and try to make your opponents miss or commit a fault.",
      "To get started, learn the opening sequence: **serve diagonally, let the serve bounce, let the return bounce, then continue the rally.**",
      "This guide covers what you need, how a game works, and what to practise first.",
    ],
    figure: {
      src: "/hero-court.png",
      alt: "A doubles court labelled with the opponents, your team, the kitchen (non-volley zone), and the baseline.",
    },
    seo: {
      title: "How to Play Pickleball: A Beginner’s Guide | SkillDink",
      description:
        "Learn how to play pickleball with simple explanations of serving, scoring, kitchen rules, and essential shots. Get ready for your first game.",
      canonical: "https://skilldink.com/guides/how-to-play-pickleball",
      ogTitle: "How to Play Pickleball: A Beginner’s Guide",
      ogDescription:
        "Start with the basics: equipment, serving, the two-bounce rule, scoring, and the kitchen. Clear guidance for your first pickleball game.",
      imageAlt:
        "SkillDink beginner pickleball resources covering rules, scoring, shots, and strategy.",
    },
    body: [
      {
        type: "h2",
        text: "How to play pickleball in six steps",
      },
      {
        type: "ol",
        items: [
          "**Choose singles or doubles.** Get a paddle for each player and a suitable pickleball.",
          "**Start with a diagonal serve.** Serve from behind the baseline into the opposite service court, beyond the kitchen line.",
          "**Let the serve bounce.** The receiver must allow it to bounce before returning it.",
          "**Let the return bounce.** The serving side must also wait for a bounce before hitting.",
          "**Continue the rally.** Play off a bounce or volley when permitted, respecting the kitchen rules.",
          "**Update the score and server.** The outcome depends on the scoring format and which side won the rally.",
        ],
      },
      {
        type: "p",
        text: "You can practise that sequence without keeping score before playing a game.",
      },
      { type: "h2", text: "What do you need to play pickleball?" },
      { type: "p", text: "You need:" },
      {
        type: "ul",
        items: [
          "**A pickleball paddle** for each player.",
          "**A perforated plastic pickleball** suited to your playing environment.",
          "**Court shoes** with grip and support for changes of direction.",
          "**Access to a marked court and suitable net.**",
          "**A partner or opponents**, depending on your practice or game.",
        ],
      },
      {
        type: "p",
        text: "Check what the venue provides before buying equipment. You may be able to borrow a paddle for an introductory session.",
      },
      { type: "h3", text: "Get familiar with the court" },
      {
        type: "p",
        text: "A pickleball court measures **20 feet wide by 44 feet long**, or approximately **6.10 by 13.41 metres**, for both singles and doubles.",
      },
      { type: "p", text: "The key areas are:" },
      {
        type: "table",
        headers: ["Court feature", "What it means"],
        rows: [
          ["Baseline", "The back boundary at each end."],
          ["Sidelines", "The boundaries along either side."],
          ["Centreline", "Divides each end’s service area into left and right courts."],
          ["Kitchen", "The non-volley zone extending 7 feet from each side of the net."],
          ["Kitchen line", "The boundary between the kitchen and the service area."],
        ],
      },
      {
        type: "p",
        text: "Find these lines before your first game. They help you understand serving targets and where you may volley.",
      },
      { type: "h2", text: "How does a pickleball rally start?" },
      {
        type: "p",
        text: "Every rally begins with a serve. The receiving player sends it back, and the teams then exchange shots until the rally ends.",
      },
      { type: "h3", text: "Serve diagonally" },
      {
        type: "p",
        text: "Start behind the baseline and aim into the diagonally opposite service court. The serve must clear the kitchen and its line.",
      },
      {
        type: "p",
        text: "Two serving options are the **volley serve**, struck before a bounce, and the **drop serve**, struck after dropping the ball and letting it bounce. Each has specific requirements; a simple, controlled serve is a useful starting point.",
      },
      { type: "p", text: "You normally get one service attempt." },
      { type: "h3", text: "Follow the two-bounce rule" },
      {
        type: "p",
        text: "The serve must bounce before the receiver hits it. The return must then bounce before the serving side hits it.",
      },
      {
        type: "p",
        text: "After those two required bounces, you may volley—hit before a bounce—when the kitchen rules permit.",
      },
      {
        type: "p",
        text: "**It is one bounce on each side, not two bounces on the same side.** During the rally, return the ball before it bounces a second time on your side.",
      },
      {
        type: "p",
        text: "[Read the beginner pickleball rules guide](/guides/pickleball-rules).",
      },
      { type: "h2", text: "What is the kitchen rule?" },
      {
        type: "p",
        text: "The kitchen is a **non-volley zone**, not a no-entry zone.",
      },
      {
        type: "p",
        text: "You may stand in it and play a bounced ball. You may not volley while touching the kitchen or its boundary line. Your momentum after a volley must not carry you into it, either.",
      },
      {
        type: "p",
        text: "If you enter the kitchen, re-establish both feet outside it before volleying.",
      },
      {
        type: "p",
        text: "[Explore the kitchen rules and examples](/guides/the-kitchen).",
      },
      { type: "h2", text: "How does pickleball scoring work?" },
      {
        type: "p",
        text: "This guide introduces **traditional side-out scoring**, where only the serving team scores. Games commonly go to **11 points**, with a two-point winning margin.",
      },
      { type: "p", text: "In doubles, call three numbers:" },
      {
        type: "p",
        text: "**Your team’s score – opponents’ score – server number**",
      },
      {
        type: "p",
        text: "For example, **4–2–1** means your team has four points, your opponents have two, and you are the first server in the current service turn.",
      },
      {
        type: "table",
        headers: ["Rally outcome", "What happens"],
        rows: [
          [
            "Serving team wins",
            "They score; the same server changes sides and serves again.",
          ],
          ["First server loses", "No point; their partner serves next."],
          [
            "Second server loses",
            "No point; a side-out gives the other team the serve.",
          ],
        ],
      },
      {
        type: "p",
        text: "The opening team gets only one server before its first side-out, so a doubles game starts at **0–0–2**.",
      },
      {
        type: "p",
        text: "Some sessions use rally scoring, which awards points differently. Confirm the format before starting.",
      },
      {
        type: "p",
        text: "[Learn doubles scoring and serving order](/guides/pickleball-scoring).",
      },
      { type: "h2", text: "What ends a rally?" },
      {
        type: "p",
        text: "Common faults include hitting out, failing to get the ball over the net, letting it bounce twice, or committing a kitchen violation.",
      },
      {
        type: "p",
        text: "For ordinary shots, a ball touching a court boundary line is in. On a serve, touching the kitchen line is a fault.",
      },
      {
        type: "p",
        text: "Do not automatically replay a close landing. If you cannot clearly call the ball out, treat it as in.",
      },
      { type: "h2", text: "Which shots should beginners learn first?" },
      {
        type: "p",
        text: "Start by recognising the shots rather than trying to master them all at once.",
      },
      {
        type: "table",
        headers: ["Shot", "Its basic purpose"],
        rows: [
          ["Serve", "Start the rally with a legal diagonal shot."],
          ["Return", "Send the serve back after its bounce."],
          ["Drive", "Hit a firm shot after a bounce, using a forehand or backhand."],
          ["Dink", "Play a soft shot into the opposite kitchen, usually after a bounce."],
          ["Volley", "Intercept the ball before it bounces."],
          ["Drop", "Send a soft ball from farther back into the opposite kitchen."],
        ],
      },
      {
        type: "p",
        text: "Begin with controlled serves, returns, and cooperative rallies. Add other shots as you become more comfortable.",
      },
      {
        type: "p",
        text: "[Explore pickleball shots and when to use them](/guides/pickleball-shots).",
      },
      { type: "h2", text: "Where should you stand?" },
      { type: "p", text: "Your position changes throughout the rally." },
      {
        type: "p",
        text: "When serving, stay back initially so you can let the return bounce. When receiving, allow room for the serve to bounce before you hit.",
      },
      {
        type: "p",
        text: "After a controlled return, look for time to move towards the kitchen line. Your partner may already be there. Get balanced for the next shot, even if you cannot reach the line yet.",
      },
      {
        type: "p",
        text: "During doubles rallies, watch both the ball and your partner. Avoid chasing the same shot or leaving a large gap between you.",
      },
      {
        type: "p",
        text: "[Learn where to stand in pickleball doubles](/guides/where-to-stand).",
      },
      { type: "h2", text: "Try this before your first game" },
      {
        type: "p",
        text: "With a partner, practise the opening sequence without scoring:",
      },
      {
        type: "ol",
        items: [
          "Serve diagonally.",
          "Let the serve bounce and return it.",
          "Let the return bounce and play the next shot.",
          "Continue cooperatively.",
          "Reset and change roles.",
        ],
      },
      {
        type: "p",
        text: "Say **“serve, bounce, return, bounce”** aloud if it helps.",
      },
      {
        type: "p",
        text: "Then play a short game using one focus: calling the score, recognising the required bounces, or choosing a generous target inside the lines.",
      },
      {
        type: "p",
        text: "For a longer session, follow our [beginner pickleball practice routine](/guides/pickleball-practice).",
      },
      { type: "h2", text: "Common beginner mistakes" },
      { type: "h3", text: "Volleying the return of serve" },
      {
        type: "p",
        text: "Remember that both opening shots must bounce. Being close to the net does not remove that requirement.",
      },
      { type: "h3", text: "Treating the kitchen as forbidden space" },
      {
        type: "p",
        text: "You can enter it. The restriction concerns volleying and the momentum from a volley.",
      },
      { type: "h3", text: "Trying to win with every shot" },
      {
        type: "p",
        text: "Give yourself room inside the lines. A controlled reply can give you time to recover and prepare.",
      },
      { type: "h3", text: "Running forward without preparing" },
      {
        type: "p",
        text: "Move when you have time, then get ready for the opponent’s shot. Reaching a particular line is less useful if you cannot play the next ball.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Can you play pickleball with two people?" },
      {
        type: "p",
        text: "Yes. Two players can play singles, with one person covering each side. Four players can play doubles, with two on each side.",
      },
      { type: "h3", text: "Does the ball have to bounce every time?" },
      {
        type: "p",
        text: "No. The serve and return must each bounce before being hit. After that, you can play off a bounce or volley when permitted by the kitchen rules.",
      },
      { type: "h3", text: "Can you step into the kitchen?" },
      {
        type: "p",
        text: "Yes. You can enter it to play a bounced ball. You cannot volley while touching it or its line, or be carried into it by volleying momentum.",
      },
      { type: "h3", text: "Do you score when you win a rally while receiving?" },
      {
        type: "p",
        text: "Not in traditional side-out scoring. Your win causes a server change or side-out, depending on the opponents’ service turn. Rally scoring works differently.",
      },
      { type: "h3", text: "Do you need tennis experience?" },
      {
        type: "p",
        text: "No. Start with gentle feeds and cooperative rallies so you can learn the timing, paddle control, and court rules. Previous racket-sport experience is optional.",
      },
      { type: "h3", text: "What should I practise first?" },
      {
        type: "p",
        text: "Start with a legal serve, a controlled return, and the two required bounces. Once that sequence feels familiar, add scoring and simple positioning goals.",
      },
      { type: "h3", text: "Can I learn pickleball from written lessons?" },
      {
        type: "p",
        text: "Written explanations and visuals can help you understand the game before and between sessions. On-court practice develops the timing, movement, and control needed to apply that understanding.",
      },
    ],
    cta: {
      title: "Build your pickleball foundations",
      paragraphs: [
        "Want a structured path through the game?",
        "**Pickleball Foundations** brings together eight modules and 25 lessons covering the court, rules, scoring, essential shots, positioning, strategy, and practice.",
        "Use visual explanations, on-court exercises, and quick quizzes to understand what to do—and choose what to practise next.",
      ],
      preview:
        "Prefer a preview? [Try “How a rally works” for free](/learn/how-a-rally-works).",
    },
    reference:
      "**Rules reference:** [USA Pickleball’s rules summary](https://usapickleball.org/rules/summary/).",
  },
  {
    slug: "pickleball-rules",
    title: "Pickleball rules explained simply",
    topic: "Rules",
    summary:
      "Serve diagonally past the kitchen, let the serve and the return bounce, and a fault ends the rally.",
    answer: [
      "The basic pickleball rules start with a diagonal serve and two required bounces. After that, you exchange shots until someone commits a fault—for example, hitting out or volleying illegally from the kitchen.",
      "This guide explains the rules you will use in your first games, including serving, scoring, line calls, and common situations.",
      "It follows standard USA Pickleball rules and introduces **traditional doubles scoring**. Confirm the scoring format with your group before playing.",
    ],
    figure: {
      src: "/two-bounce-players.jpg",
      alt: "Three panels of the two-bounce rule: the serve bounces, the return bounces, then volleys are allowed.",
    },
    seo: {
      title: "Pickleball Rules for Beginners: Simply Explained | SkillDink",
      description:
        "Learn the basic pickleball rules, including serving, scoring, the two-bounce rule, kitchen faults, and line calls. Clear examples for beginners.",
      canonical: "https://skilldink.com/guides/pickleball-rules",
      ogTitle: "Pickleball Rules Explained Simply | SkillDink",
      ogDescription:
        "Understand legal serves, the two-bounce rule, kitchen restrictions, scoring, and common faults before your next pickleball game.",
      imageAlt:
        "Pickleball rules explained with visual examples of serving, required bounces, and kitchen restrictions.",
    },
    body: [
      { type: "h2", text: "The basic pickleball rules at a glance" },
      {
        type: "table",
        headers: ["Rule", "What to remember"],
        rows: [
          ["Serve diagonally", "Land in the opposite service court, beyond the kitchen line."],
          [
            "Let both opening shots bounce",
            "The receiver lets the serve bounce; the serving side lets the return bounce.",
          ],
          ["Respect the kitchen", "No volley while touching the non-volley zone or its line."],
          ["Return before a second bounce", "Two bounces on your side end the rally."],
          [
            "Keep the ball in",
            "Boundary lines count as in, with a kitchen-line exception on serves.",
          ],
          ["Use the agreed scoring format", "In traditional scoring, only the serving side scores."],
        ],
      },
      {
        type: "p",
        text: "New to the sport itself? Start with [how to play pickleball](/guides/how-to-play-pickleball).",
      },
      { type: "h2", text: "1. Serve into the diagonally opposite service court" },
      { type: "p", text: "The serve starts each rally." },
      {
        type: "p",
        text: "At contact, at least one foot must be on the ground behind the baseline. Neither foot may touch the baseline or court, or the ground outside the imaginary extensions of the centreline and sideline.",
      },
      {
        type: "p",
        text: "Aim diagonally into the correct service court. You normally get **one serve attempt**.",
      },
      { type: "h3", text: "Where can the serve land?" },
      {
        type: "table",
        headers: ["Landing location", "Result"],
        rows: [
          ["Inside the correct service court", "In"],
          ["Its baseline, sideline, or centreline", "In"],
          ["Kitchen or kitchen line", "Fault"],
          ["Wrong service court", "Fault"],
          ["Beyond the court boundaries", "Fault"],
        ],
      },
      { type: "h3", text: "Volley serve or drop serve?" },
      {
        type: "p",
        text: "A **volley serve** is struck before the ball bounces. At contact:",
      },
      {
        type: "ul",
        items: [
          "The paddle must move in an upward arc.",
          "The ball must be no higher than the waist.",
          "The highest point of the paddle head must not be above the highest part of the wrist.",
        ],
      },
      {
        type: "p",
        text: "A **drop serve** is struck after the ball bounces. Release it from a natural, unaided height without throwing it upwards or pushing it downwards. The three volley-serve contact restrictions above do not apply.",
      },
      {
        type: "p",
        text: "For either serve, do not deliberately add spin during the release. Spin produced by paddle contact is permitted.",
      },
      { type: "h2", text: "2. Follow the two-bounce rule" },
      { type: "p", text: "The opening sequence is:" },
      {
        type: "ol",
        items: [
          "**Serve:** the receiver lets the ball bounce before returning it.",
          "**Return:** the serving side lets that ball bounce before hitting.",
          "**Continue:** players may now volley or play after a bounce, subject to the kitchen rules.",
        ],
      },
      {
        type: "p",
        text: "These are **one bounce on each side**, not two bounces on one side.",
      },
      {
        type: "p",
        text: "After the opening sequence, you do not have to let every shot bounce.",
      },
      { type: "h2", text: "3. Understand what the kitchen restricts" },
      {
        type: "p",
        text: "The kitchen, or **non-volley zone**, extends 7 feet from each side of the net.",
      },
      {
        type: "p",
        text: "You may enter it and play a bounced ball. You may not volley while touching the kitchen or its boundary line. Momentum from your volley must not carry you into it—even after the rally has otherwise ended.",
      },
      {
        type: "p",
        text: "After being in the kitchen, establish both feet outside it before volleying.",
      },
      {
        type: "p",
        text: "[Read the full pickleball kitchen rules guide](/guides/the-kitchen).",
      },
      { type: "h2", text: "4. Know how points and serving turns work" },
      {
        type: "p",
        text: "In **traditional side-out scoring**, only the serving side scores. Games commonly go to 11, with a two-point winning margin.",
      },
      { type: "p", text: "In doubles:" },
      {
        type: "ul",
        items: [
          "Win a rally while serving: score a point, change positions, and let the same player serve again.",
          "Lose as the first server: your partner serves next from their existing position.",
          "Lose as the second server: a **side-out** gives the opponents the serve.",
        ],
      },
      {
        type: "p",
        text: "The opening team gets only one server before its first side-out. That is why the starting call is **0–0–2**.",
      },
      {
        type: "p",
        text: "Some sessions use rally scoring instead. Ask which format applies.",
      },
      {
        type: "p",
        text: "[Learn doubles scoring and serving order](/guides/pickleball-scoring).",
      },
      { type: "h2", text: "5. Recognise common faults" },
      {
        type: "p",
        text: "A fault stops the rally. Typical examples include:",
      },
      {
        type: "ul",
        items: [
          "The ball’s first landing is outside the correct court.",
          "Your shot fails to cross the net.",
          "The ball bounces twice before you return it.",
          "You hit before a required opening bounce.",
          "You commit a kitchen violation.",
          "You, your clothing, or your paddle touch the net while the ball is live.",
          "A live ball hits your body or clothing.",
        ],
      },
      {
        type: "p",
        text: "The scoring format and serving turn determine what happens next. Losing a rally does not always give the opponents a point.",
      },
      { type: "h2", text: "6. Make fair line calls" },
      {
        type: "p",
        text: "In games without line officials, call the lines at your end.",
      },
      {
        type: "p",
        text: "A ball touching a boundary line is in. On a serve, however, the kitchen line is a fault.",
      },
      {
        type: "p",
        text: "**Only call out when you clearly see the ball out.** If you are unsure, favour your opponents. If doubles partners disagree, treat the ball as in.",
      },
      { type: "p", text: "Uncertainty alone does not justify a replay." },
      { type: "h2", text: "Common situations: play on, call it in, or replay?" },
      { type: "h3", text: "The ball clips the net" },
      {
        type: "p",
        text: "If it crosses and lands legally, keep playing. This includes a serve that clears the kitchen and lands in the correct service court; there is no automatic service let.",
      },
      { type: "h3", text: "Nobody clearly sees the landing" },
      {
        type: "p",
        text: "Treat it as in. Do not restart simply because the call was close.",
      },
      { type: "h3", text: "A stray ball interferes with play" },
      {
        type: "p",
        text: "Warn players promptly if there is a danger. Stop and clear the hazard; a valid outside hindrance results in a replay.",
      },
      { type: "h2", text: "Try this: name the fault" },
      {
        type: "p",
        text: "With a partner, practise short rallies without scoring.",
      },
      {
        type: "p",
        text: "After each rally, identify what ended it: “out,” “two bounces,” “serve in the kitchen,” or another clear explanation.",
      },
      {
        type: "p",
        text: "If you disagree, pause and check the relevant rule. The aim is to recognise situations before adding the pressure of a game.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "What are the most important rules for beginners?" },
      {
        type: "p",
        text: "Start with diagonal serving, the two required opening bounces, kitchen restrictions, and keeping the ball in. Then add scoring and serving order.",
      },
      { type: "h3", text: "Is a serve on the kitchen line in?" },
      {
        type: "p",
        text: "No. A serve must clear the kitchen, including its line. The correct service court’s other boundary lines count as in.",
      },
      { type: "h3", text: "Can you hit a ball before it bounces?" },
      {
        type: "p",
        text: "Yes, once the serve and return have each bounced. You must also comply with the kitchen restrictions.",
      },
      { type: "h3", text: "Can you stand in the kitchen before the ball bounces?" },
      {
        type: "p",
        text: "Yes. Being there is permitted; volleying while touching it is prohibited. You still need to get both feet outside before a subsequent volley.",
      },
      { type: "h3", text: "What happens if the serve hits the net?" },
      {
        type: "p",
        text: "Play continues if it lands legally in the correct service court beyond the kitchen line. Otherwise, it is a fault.",
      },
      { type: "h3", text: "Do receivers get a point when they win a rally?" },
      {
        type: "p",
        text: "Not in traditional scoring. They cause a server change or side-out. Rally scoring uses different point-awarding rules.",
      },
      { type: "h3", text: "Are singles and doubles rules the same?" },
      {
        type: "p",
        text: "The main rally rules are shared, but serving order, scoring calls, and positioning differ. Singles has one player per side and no partner server number.",
      },
    ],
    cta: {
      title: "Put the rules into practice",
      paragraphs: [
        "Understanding a rule is one step. Recognising it while the rally is moving takes repetition.",
        "**Pickleball Foundations** works through serving, the kitchen, faults, scoring, and real-game situations with visual lessons, practical exercises, and explained quiz answers.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Rules references:** [USA Pickleball’s rules summary](https://usapickleball.org/rules/summary/) and [official rulebook](https://usapickleball.org/rules/).",
  },
  {
    slug: "the-kitchen",
    title: "Pickleball kitchen rules: the non-volley zone explained",
    topic: "Kitchen rules",
    summary:
      "The kitchen is the non-volley zone on both sides of the net. You may enter it. You may not volley from inside it.",
    answer: [
      "**You may enter the kitchen, but you may not volley while touching it or its line. Momentum from a volley must not carry you in, either.**",
      "That is the main distinction: the kitchen restricts volleying, not simply standing near the net.",
      "This guide explains the area, the common faults, and what to check before your next shot.",
    ],
    figure: {
      src: "/kitchen-rules.jpg",
      alt: "Three pickleball kitchen examples showing a legal bounced shot, a foot-on-line volley fault, and a momentum fault.",
    },
    seo: {
      title: "Pickleball Kitchen Rules: What’s Allowed? | SkillDink",
      description:
        "Understand pickleball kitchen rules: when you can step in, why the line counts, how momentum causes faults, and when you can volley again.",
      canonical: "https://skilldink.com/guides/the-kitchen",
      ogTitle: "Pickleball Kitchen Rules Explained | SkillDink",
      ogDescription:
        "Can you step into the kitchen? Learn what is allowed, what causes a fault, and how to handle common non-volley-zone situations.",
      imageAlt:
        "Three pickleball kitchen examples showing a legal bounced shot, a foot-on-line volley fault, and a momentum fault.",
      image: { src: "/kitchen-rules.jpg", width: 1024, height: 609 },
    },
    body: [
      { type: "h2", text: "What is the kitchen in pickleball?" },
      {
        type: "p",
        text: "The kitchen is the informal name for the **non-volley zone**, often shortened to **NVZ**.",
      },
      {
        type: "p",
        text: "It extends **7 feet (2.13 metres)** from the net on each side and spans the court’s full **20-foot (6.10-metre) width**. Its boundary lines belong to the zone.",
      },
      {
        type: "p",
        text: "A **volley** means hitting the ball before it bounces. Hitting after a bounce is a different shot, even when contact happens close to the net.",
      },
      { type: "h2", text: "Can you step into the kitchen?" },
      {
        type: "p",
        text: "Yes. You can enter before a bounce, wait there, and play a bounced ball.",
      },
      {
        type: "p",
        text: "You do not have to keep your feet outside while reaching for a short shot. Step in when needed, then recover according to the next ball.",
      },
      {
        type: "p",
        text: "The restriction matters when you volley—or when you are still moving from a volley.",
      },
      { type: "h2", text: "What is allowed, and what is a fault?" },
      {
        type: "table",
        headers: ["Situation", "Result"],
        rows: [
          ["Play a bounced ball while standing in the kitchen", "Allowed"],
          ["Volley with a toe touching the kitchen line", "Fault"],
          ["Volley outside, then stumble into the kitchen from that shot", "Fault"],
          [
            "Return to volleying before both feet have contacted the surface outside",
            "Fault",
          ],
          [
            "Stand in the kitchen while your partner volleys, without touching them",
            "Allowed",
          ],
        ],
      },
      {
        type: "p",
        text: "If you are unsure during practice, identify two things first: **did the ball bounce, and what was touching the kitchen?**",
      },
      { type: "h2", text: "The kitchen line counts" },
      {
        type: "p",
        text: "There is no “small amount” of line contact allowed during a volley. A shoe touching the white boundary counts as kitchen contact.",
      },
      {
        type: "p",
        text: "The restriction also covers more than feet. Your paddle, clothing, or another item connected with your volley can cause a violation if it contacts the zone.",
      },
      {
        type: "p",
        text: "Check your position before swinging rather than relying on a last-second reach.",
      },
      { type: "h2", text: "Momentum matters after contact" },
      {
        type: "p",
        text: "A volley can begin outside the kitchen and still become a fault.",
      },
      {
        type: "p",
        text: "For example, you hit legally, lose balance, and step forward into the zone. If that movement comes from your volley, the shot is not saved by the fact that contact happened outside.",
      },
      {
        type: "p",
        text: "There is no fixed number of seconds after which stepping in automatically becomes legal. What matters is whether the volley’s momentum has ended.",
      },
      { type: "h2", text: "Get both feet out before volleying again" },
      {
        type: "p",
        text: "After being in the kitchen, both feet must contact the playing surface completely outside it before you volley.",
      },
      {
        type: "p",
        text: "Simply lifting one foot, or jumping from inside the zone to intercept the ball, does not establish the required outside position.",
      },
      {
        type: "p",
        text: "Use a clear reset in practice: step out, establish your feet, and prepare your paddle.",
      },
      { type: "h2", text: "Can your partner stay in the kitchen?" },
      {
        type: "p",
        text: "Yes, provided their position does not create contact with the volleying player.",
      },
      {
        type: "p",
        text: "If you touch a partner who is touching the kitchen during your volley, that can be your fault. The same concern applies if your volleying momentum carries you into them while they are in contact with the zone.",
      },
      { type: "p", text: "Give each other space around the line." },
      { type: "h2", text: "Can the ball land in the kitchen?" },
      {
        type: "p",
        text: "During a rally, yes. Soft shots such as dinks and drops often aim there.",
      },
      {
        type: "p",
        text: "**The serve is the exception:** it must land beyond the kitchen and its line, in the correct diagonal service court.",
      },
      { type: "p", text: "This separates two questions:" },
      {
        type: "ul",
        items: ["**Where may the ball land?**", "**Where may a player volley?**"],
      },
      {
        type: "p",
        text: "Read the [beginner pickleball rules guide](/guides/pickleball-rules) for serving and other faults.",
      },
      { type: "h2", text: "Three situations to recognise" },
      { type: "h3", text: "1. A short ball has bounced" },
      {
        type: "p",
        text: "Move towards it, use a controlled swing, and recover. Entering the zone is part of playing the shot.",
      },
      { type: "h3", text: "2. A volley would require an awkward reach" },
      {
        type: "p",
        text: "Avoid forcing the contact. If the ball is going to land in, allowing a bounce may give you a more manageable reply.",
      },
      { type: "h3", text: "3. You are falling forward after a volley" },
      {
        type: "p",
        text: "The shot is not finished just because the ball left your paddle. Work on balance and a shorter action during practice so you can control your finish.",
      },
      { type: "h2", text: "Try this: bounce, recover, volley" },
      { type: "p", text: "With a partner:" },
      {
        type: "ol",
        items: [
          "Begin with gentle feeds rather than competitive rallies.",
          "Play a short bounced ball from inside the kitchen.",
          "Step back out and establish both feet.",
          "Receive a separate, easy volley feed.",
          "Finish balanced and check your feet.",
        ],
      },
      {
        type: "p",
        text: "Keep the feeds slow enough to make each stage deliberate. Do not rush the recovery just to complete the pattern.",
      },
      {
        type: "p",
        text: "For more structured practice, use our [beginner pickleball practice routine](/guides/pickleball-practice).",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Do you have to wait for the ball to bounce before entering?" },
      {
        type: "p",
        text: "No. You may enter beforehand. The restriction is on volleying, not entry.",
      },
      { type: "h3", text: "Can your paddle reach over the kitchen?" },
      {
        type: "p",
        text: "Yes. Reaching above the zone is different from touching its surface. You still need a legal outside position and a controlled finish.",
      },
      { type: "h3", text: "Is the kitchen rule different in singles?" },
      {
        type: "p",
        text: "No. The non-volley-zone restriction applies in both singles and doubles.",
      },
      { type: "h3", text: "Can you stand on the line to hit a bounced ball?" },
      {
        type: "p",
        text: "Yes. Line contact does not prohibit a shot played after a bounce.",
      },
      { type: "h3", text: "Is a ball on the kitchen line in or out?" },
      {
        type: "p",
        text: "During an ordinary rally, it is in. A serve landing on that line is a fault.",
      },
      { type: "h3", text: "Where should beginners usually stand near the net?" },
      {
        type: "p",
        text: "A little behind the kitchen line gives you room to prepare without accidentally touching it. Adjust for the incoming ball rather than treating that position as fixed.",
      },
      { type: "h3", text: "What should you remember first?" },
      {
        type: "p",
        text: "Identify whether you are playing a bounce or a volley. Then check your contact with the zone and your balance.",
      },
    ],
    cta: {
      title: "Make the kitchen rule easier to recognise",
      paragraphs: [
        "**Pickleball Foundations** works through bounced shots, line contact, momentum, and other common game situations using visual lessons and short knowledge checks.",
        "You will also cover scoring, essential shots, positioning, and practical drills across eight modules and 25 lessons.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Rules reference:** [USA Pickleball’s official rulebook](https://usapickleball.org/rules/), including the section on non-volley-zone infractions.",
  },
  {
    slug: "pickleball-scoring",
    title: "Pickleball scoring: how to keep score in doubles",
    topic: "Scoring",
    summary:
      "Only the serving team can score. Call your score, their score, then the server number, and play to 11, win by 2.",
    answer: [
      "In **traditional pickleball scoring, only the serving team scores points**. Before each doubles serve, call three numbers: your team’s score, your opponents’ score, and the server number.",
      "The part that takes practice is knowing what changes after a rally: the score, the server, or the team serving.",
      "This guide explains traditional doubles scoring. Some sessions use rally scoring instead, so confirm the format before starting.",
    ],
    figure: {
      src: "/how-scoring-works.jpg",
      alt: "Pickleball doubles scoring examples showing score calls, position changes, and the next server.",
    },
    seo: {
      title: "Pickleball Scoring: How to Keep Score in Doubles | SkillDink",
      description:
        "Understand pickleball doubles scoring, the three-number score call, 0–0–2, server changes, and side-outs with clear examples for beginners.",
      canonical: "https://skilldink.com/guides/pickleball-scoring",
      ogTitle: "Pickleball Doubles Scoring Explained | SkillDink",
      ogDescription:
        "Make sense of the three numbers, who serves next, and when players switch positions. Learn traditional doubles scoring through simple examples.",
      imageAlt:
        "Pickleball doubles scoring examples showing score calls, position changes, and the next server.",
      image: { src: "/how-scoring-works.jpg", width: 1024, height: 624 },
    },
    body: [
      { type: "h2", text: "Pickleball doubles scoring at a glance" },
      {
        type: "table",
        headers: ["Question", "Quick answer"],
        rows: [
          ["Who can score?", "Only the serving team in traditional scoring."],
          ["What do you call?", "Serving team’s score, receiving team’s score, server number."],
          ["What is the starting call?", "0–0–2."],
          ["What happens when you score?", "The same server continues from the other side."],
          ["What happens when server 1 loses?", "Their partner becomes server 2."],
          ["What happens when server 2 loses?", "A side-out passes service to the opponents."],
          ["How do you win?", "Commonly, reach 11 with a lead of at least two."],
        ],
      },
      { type: "h2", text: "What do the three numbers mean?" },
      {
        type: "p",
        text: "Always call **your team’s score first**, even when you are losing.",
      },
      { type: "p", text: "For example, **4–2–1** means:" },
      {
        type: "ul",
        items: [
          "**4:** your team has four points.",
          "**2:** your opponents have two points.",
          "**1:** you are the first server in your team’s current service turn.",
        ],
      },
      {
        type: "p",
        text: "The third number does not count serve attempts. It identifies which partner is serving during that turn.",
      },
      { type: "p", text: "Finish the score call before hitting the serve." },
      { type: "h2", text: "Why does pickleball start at 0–0–2?" },
      {
        type: "p",
        text: "The opening serving team gets only one player’s serving turn before the first side-out.",
      },
      {
        type: "p",
        text: "The opening server is therefore designated **server 2**. They continue serving while their team wins rallies. When they lose one, service passes to the opponents.",
      },
      {
        type: "p",
        text: "After that opening turn, both partners normally have an opportunity to serve before their team loses service.",
      },
      { type: "h3", text: "An opening-game example" },
      {
        type: "table",
        headers: ["What happens", "Next score call"],
        rows: [
          ["Team A starts the game", "Team A calls **0–0–2**."],
          ["Team A wins the rally", "Same server calls **1–0–2**."],
          ["Team A loses the next rally", "Side-out. Team B calls **0–1–1**."],
          [
            "Team B’s first server loses without scoring",
            "Their partner calls **0–1–2**.",
          ],
        ],
      },
      {
        type: "p",
        text: "Notice how the score order changes when the other team serves: the new serving team announces its own score first.",
      },
      { type: "h2", text: "What happens after each rally?" },
      { type: "h3", text: "If the serving team wins" },
      {
        type: "p",
        text: "Add one point. The serving partners exchange left and right positions, and the same player serves again.",
      },
      {
        type: "p",
        text: "The receiving players do not exchange positions simply because their opponents scored.",
      },
      { type: "h3", text: "If the receiving team wins" },
      { type: "p", text: "No point is awarded." },
      {
        type: "p",
        text: "If the opponents were using server 1, their partner serves next. If they were using server 2, their service turn ends.",
      },
      {
        type: "p",
        text: "**Winning while receiving does not always mean your team immediately gets the serve.**",
      },
      { type: "h2", text: "Server change versus side-out" },
      { type: "p", text: "These are different events." },
      {
        type: "p",
        text: "**Server change:** service moves from the first server to their partner on the same team.",
      },
      { type: "p", text: "**Side-out:** service passes to the opposing team." },
      {
        type: "p",
        text: "At a side-out, the correctly positioned player on the new serving team’s right begins as server 1.",
      },
      {
        type: "p",
        text: "Server numbers are assigned for that service turn. The same person is not necessarily server 1 throughout the game.",
      },
      { type: "h2", text: "When do partners switch positions?" },
      { type: "p", text: "For standard doubles positioning, remember:" },
      {
        type: "p",
        text: "**Score a point: exchange positions. Change server: keep positions.**",
      },
      {
        type: "p",
        text: "Here is an example with Alex and Sam, viewed facing the net:",
      },
      {
        type: "table",
        headers: ["Stage", "Score call", "Positions and next server"],
        rows: [
          [
            "Alex is server 1 on the right",
            "**4–2–1**",
            "Alex serves from the right; Sam is left.",
          ],
          [
            "Their team wins",
            "**5–2–1**",
            "They exchange positions. Alex serves again, now from the left.",
          ],
          [
            "Their team loses",
            "**5–2–2**",
            "They keep positions. Sam serves from the right.",
          ],
          [
            "Their team loses again",
            "**2–5–1**",
            "Side-out. The opponents’ right-side player serves first.",
          ],
        ],
      },
      {
        type: "p",
        text: "These examples assume ordinary positioning without stacking or other advanced arrangements.",
      },
      { type: "h2", text: "Does an odd score always mean serving from the left?" },
      {
        type: "p",
        text: "**Not in doubles.** Do not apply that shortcut to every server.",
      },
      {
        type: "p",
        text: "The player who started serving for your team at the beginning of the game belongs on the right when your team’s score is even, and on the left when it is odd. Their partner has the opposite positions.",
      },
      {
        type: "p",
        text: "For beginners, tracking who started and exchanging positions only when your team scores is more useful than guessing from the score alone.",
      },
      { type: "h2", text: "How many points do you need to win?" },
      { type: "p", text: "A common format is **first to 11, win by two**." },
      {
        type: "ul",
        items: [
          "**11–9:** game over.",
          "**11–10:** continue.",
          "**12–10:** game over.",
          "**12–11:** continue.",
        ],
      },
      {
        type: "p",
        text: "Other game lengths are used, including 15 or 21. Agree on the target and winning margin before playing.",
      },
      { type: "h2", text: "Traditional scoring versus rally scoring" },
      {
        type: "table",
        headers: ["Format", "How points are awarded"],
        rows: [
          ["Traditional side-out scoring", "Only the serving side scores."],
          ["Rally scoring", "A point is generally awarded after every rally."],
        ],
      },
      {
        type: "p",
        text: "Rally-scoring formats can also use different service and positioning procedures. Do not assume that every traditional doubles rule transfers unchanged.",
      },
      {
        type: "p",
        text: "If someone says, “We’re using rally scoring,” ask them to explain the session’s format.",
      },
      { type: "h2", text: "Common scoring mistakes" },
      { type: "h3", text: "Giving receivers a point" },
      {
        type: "p",
        text: "Check which format you are playing. In traditional scoring, winning while receiving changes service rather than adding a point.",
      },
      { type: "h3", text: "Calling the leading score first" },
      {
        type: "p",
        text: "The serving team’s score comes first, regardless of which team is ahead.",
      },
      { type: "h3", text: "Switching positions when the server changes" },
      {
        type: "p",
        text: "Passing service to your partner does not itself require an exchange of positions.",
      },
      { type: "h3", text: "Treating server 2 as a second attempt" },
      {
        type: "p",
        text: "You normally get one service attempt. The number identifies the serving player’s place in the service turn.",
      },
      { type: "h2", text: "Try this: practise without hitting" },
      {
        type: "p",
        text: "Use four objects to represent players, or walk through the sequence with friends.",
      },
      {
        type: "ol",
        items: [
          "Start at **0–0–2**.",
          "Choose which team wins each imaginary rally.",
          "Update the score or server.",
          "Move the serving partners only if they scored.",
          "Say the next complete call.",
        ],
      },
      {
        type: "p",
        text: "Then try it during gentle practice rallies. Pause before serving whenever the group needs to check.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Can the receiving team score in pickleball?" },
      {
        type: "p",
        text: "In traditional scoring, no. In rally scoring, points are awarded differently. Confirm which format applies.",
      },
      { type: "h3", text: "What is a side-out?" },
      {
        type: "p",
        text: "It is the end of one team’s service turn and the transfer of service to the opponents.",
      },
      {
        type: "h3",
        text: "Why is the third number sometimes 2 when nobody has served yet?",
      },
      {
        type: "p",
        text: "That happens at the opening of a traditional doubles game. The first team gets only one server before losing service.",
      },
      { type: "h3", text: "Do you serve twice if you miss?" },
      {
        type: "p",
        text: "Normally, no. Server numbers 1 and 2 are not two attempts for the same player.",
      },
      { type: "h3", text: "Is singles scoring different?" },
      {
        type: "p",
        text: "Yes. Traditional singles calls only two numbers: the server’s score and receiver’s score. There is no partner server number.",
      },
      { type: "h3", text: "What if we lose track of the score?" },
      {
        type: "p",
        text: "Pause before the next serve. Reconstruct the last agreed call and subsequent rallies together rather than guessing. If an organiser or referee is present, ask for help.",
      },
    ],
    cta: {
      title: "Make scoring feel more familiar",
      paragraphs: [
        "Knowing the sequence is one step. Remembering it while playing takes practice.",
        "**Pickleball Foundations** walks through calling the score, serving order, and player positions with visual lessons and short questions with explained answers.",
        "The course also covers rules, essential shots, positioning, strategy, and purposeful practice.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Rules reference:** [USA Pickleball’s rules summary](https://usapickleball.org/rules/summary/) and [official rulebook](https://usapickleball.org/rules/).",
  },
  {
    slug: "pickleball-shots",
    title: "Pickleball shots explained: serve, dink, drive, and more",
    topic: "Essential shots",
    summary:
      "The serve starts the rally, the return sends it back, and the dink, drive, and volley are the shots you will use most.",
    answer: [
      "The main pickleball shots are the **serve, return, drive, dink, volley, drop, lob, and overhead**. Each solves a different problem: starting the rally, controlling pace, creating time, or responding to a high ball.",
      "You do not need to master every shot before playing. Start by understanding the differences, then practise a small number with control.",
    ],
    figure: {
      src: "/the-dink.jpg",
      alt: "A dink: let the ball bounce, guide it with a small swing, and land it softly in the opponent’s kitchen.",
    },
    seo: {
      title: "Pickleball Shots Explained: Dink, Drive, Drop & More | SkillDink",
      description:
        "Learn the main pickleball shots, including the serve, return, dink, drive, volley, drop, lob, and overhead. Understand their differences and when to use them.",
      canonical: "https://skilldink.com/guides/pickleball-shots",
      ogTitle: "Pickleball Shots Explained for Beginners | SkillDink",
      ogDescription:
        "Understand the shots you hear about on court, from serves and returns to dinks, drives, drops, and volleys.",
      imageAlt:
        "Pickleball shot examples showing a serve, forehand and backhand drives, a dink, and a volley.",
    },
    body: [
      { type: "h2", text: "The main pickleball shots at a glance" },
      {
        type: "table",
        headers: ["Shot", "What it is", "Typical purpose"],
        rows: [
          ["Serve", "The shot that starts a rally", "Put the ball legally into the diagonal service court."],
          ["Return", "The receiving side’s reply to the serve", "Keep the rally going and prepare your position."],
          ["Drive", "A firm shot, usually after a bounce", "Apply controlled pace."],
          ["Dink", "A soft shot from near the kitchen", "Land short in the opposite kitchen."],
          ["Volley", "Contact before the ball bounces", "Intercept an incoming ball."],
          ["Drop", "A soft shot from farther back", "Land in the kitchen and create an approach opportunity."],
          ["Lob", "A high, arcing shot", "Send the ball over opponents."],
          ["Overhead", "A shot struck above the head", "Respond to a high ball."],
        ],
      },
      {
        type: "p",
        text: "These names describe different features. “Forehand” and “backhand” describe how you strike the ball; “volley” describes contact before a bounce. They are not mutually exclusive categories.",
      },
      { type: "h2", text: "1. The serve: start with consistency" },
      {
        type: "p",
        text: "The serve begins the rally and must land diagonally in the correct service court, beyond the kitchen line.",
      },
      {
        type: "p",
        text: "You can use a volley serve, struck before a bounce, or a drop serve, struck after dropping the ball and letting it bounce. Their serving requirements differ.",
      },
      {
        type: "p",
        text: "For your first practice, choose a generous target and repeat a comfortable action. A little extra pace is not useful if it makes the serve unreliable.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Put a legal ball in play before chasing speed.",
      },
      {
        type: "p",
        text: "Read the [pickleball rules guide](/guides/pickleball-rules) for serving requirements.",
      },
      { type: "h2", text: "2. The return: give yourself time" },
      {
        type: "p",
        text: "The return is the shot after the serve. It must be played after the serve bounces.",
      },
      {
        type: "p",
        text: "A controlled, deep return can keep the serving team back and give you time to move forward. Aim inside the baseline rather than directly at it.",
      },
      {
        type: "p",
        text: "You can return with a forehand or backhand. Use the side that lets you meet the ball comfortably rather than stretching to force a forehand.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Return with control, then prepare for the next shot.",
      },
      {
        type: "p",
        text: "See [where to stand in pickleball doubles](/guides/where-to-stand) for the movement that follows.",
      },
      { type: "h2", text: "3. The drive: add pace without losing control" },
      {
        type: "p",
        text: "A drive is a firm shot with a relatively direct flight. Beginners commonly practise it after a bounce, using either a forehand or backhand.",
      },
      {
        type: "p",
        text: "Prepare early and meet the ball in front. A bounce that sits up, with time to get balanced, is a more manageable driving opportunity than a ball that jams you.",
      },
      {
        type: "p",
        text: "Do not judge a drive only by its speed. Watch whether it clears the net and reaches your intended target.",
      },
      { type: "p", text: "**Beginner focus:** A repeatable swing and a large target." },
      { type: "h3", text: "Forehand and backhand drives" },
      {
        type: "p",
        text: "For a right-handed player, the forehand is generally played on the right side; the backhand is generally played across the body on the left. Left-handed players reverse those sides.",
      },
      {
        type: "p",
        text: "Backhands can use one or two hands. Practise a technique you can repeat comfortably.",
      },
      { type: "h2", text: "4. The dink: keep the ball soft near the net" },
      {
        type: "p",
        text: "A dink is a controlled, soft shot from near the kitchen, commonly played after a bounce, that lands in the opponents’ kitchen.",
      },
      {
        type: "p",
        text: "Use a small action rather than a large backswing. Guide the ball over the net with enough arc to clear it, then let it fall.",
      },
      {
        type: "p",
        text: "The aim is not always an immediate winner. A useful dink can make an aggressive reply difficult and keep you involved in the rally.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Soft contact and a landing comfortably inside the kitchen.",
      },
      {
        type: "p",
        text: "Remember: you may enter the kitchen to play a bounced ball. Read the [kitchen rules guide](/guides/the-kitchen).",
      },
      { type: "h2", text: "5. The volley: intercept before the bounce" },
      { type: "p", text: "A volley is any rally shot you hit before it bounces." },
      {
        type: "p",
        text: "Near the kitchen line, a compact action is often easier to control than a full swing. Some volleys add pace; others absorb an incoming shot.",
      },
      {
        type: "p",
        text: "First, check that the two required opening bounces have happened. You must also avoid kitchen contact during the volley and its momentum.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Paddle in front, controlled contact, balanced finish.",
      },
      {
        type: "p",
        text: "Not every low ball should be left to bounce. The choice depends on its flight and whether you can intercept it comfortably and legally.",
      },
      { type: "h2", text: "6. The drop: soften the ball from farther back" },
      {
        type: "p",
        text: "A drop is a soft shot from the backcourt or transition area intended to land in the opposite kitchen.",
      },
      {
        type: "p",
        text: "A good drop can make opponents play from a lower contact point and give you an opportunity to advance. It does not guarantee that moving forward is safe.",
      },
      {
        type: "p",
        text: "The **third-shot drop** is one example: serve, return, then drop. You can also play drops later in the rally.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Give the ball a gentle arc and judge the reply before advancing.",
      },
      { type: "h3", text: "Dink versus drop" },
      {
        type: "p",
        text: "Both can land in the kitchen. The main distinction is where you play them from:",
      },
      {
        type: "ul",
        items: [
          "**Dink:** near the kitchen.",
          "**Drop:** farther back, requiring more distance.",
        ],
      },
      { type: "h2", text: "7. The lob: send the ball overhead" },
      {
        type: "p",
        text: "A lob travels high over opponents, usually with the intention of landing deep.",
      },
      {
        type: "p",
        text: "It can move players away from the net or buy time. A short lob, however, may give them an overhead opportunity.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Recognise the available space before choosing the shot.",
      },
      { type: "h2", text: "8. The overhead: respond to a high ball" },
      {
        type: "p",
        text: "An overhead is struck above the head, often in response to a lob.",
      },
      {
        type: "p",
        text: "Get into position so you can contact the ball in front rather than reaching behind yourself. Start with placement and a manageable swing.",
      },
      {
        type: "p",
        text: "**Beginner focus:** Comfortable positioning before power. If you cannot get underneath safely, let the ball bounce rather than forcing the shot.",
      },
      { type: "h2", text: "How do you choose the right shot?" },
      {
        type: "p",
        text: "Use these as starting questions, not fixed instructions:",
      },
      {
        type: "table",
        headers: ["Situation", "A useful option to consider"],
        rows: [
          ["A low, manageable bounce near the kitchen", "A controlled dink."],
          ["A bounce sits up and you have preparation time", "A forehand or backhand drive."],
          ["You are back while opponents hold the kitchen line", "A drop, if you can control it."],
          ["An airborne ball is comfortably within reach", "A legal volley."],
          ["A high ball arrives in front of you", "An overhead, if balanced."],
        ],
      },
      {
        type: "p",
        text: "Your position, contact height, opponents, and current skill all affect the decision.",
      },
      {
        type: "p",
        text: "Explore [beginner pickleball strategy](/guides/pickleball-strategy) for more on shot selection.",
      },
      { type: "h2", text: "A simple practice sequence" },
      {
        type: "p",
        text: "Choose one or two activities rather than rushing through every shot:",
      },
      {
        type: "ol",
        items: [
          "**Serve:** Hit ten attempts towards the same generous target.",
          "**Return:** Receive gentle serves, return, and get ready.",
          "**Dink:** Try a cooperative rally, counting controlled kitchen landings.",
          "**Drive:** Step back, use predictable feeds, and aim inside the lines.",
          "**Volley:** Take easy feeds from outside the kitchen, checking your balance.",
        ],
      },
      { type: "p", text: "Record one result and one next step." },
      {
        type: "p",
        text: "Use our [beginner practice routine](/guides/pickleball-practice) to organise a longer session.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Which pickleball shots should beginners learn first?" },
      {
        type: "p",
        text: "Start with serves, returns, and controlled rallies. Add dinks and volleys while learning the kitchen restrictions, then build confidence with drives and drops.",
      },
      { type: "h3", text: "Is a drive the same as a volley?" },
      {
        type: "p",
        text: "No. A drive describes a firm attacking action; a volley means contact before a bounce. In beginner drills, drives are usually introduced after a bounce.",
      },
      { type: "h3", text: "Does every bounced ball need a dink?" },
      {
        type: "p",
        text: "No. Location matters. A bounced ball in the backcourt might suit a drive or drop; a short, low ball near the kitchen may suit a dink.",
      },
      { type: "h3", text: "Is a drop only played on the third shot?" },
      {
        type: "p",
        text: "No. “Third-shot drop” identifies one moment when it is used. Drops can also appear later.",
      },
      { type: "h3", text: "Should you hit every high ball as hard as possible?" },
      {
        type: "p",
        text: "No. First check your balance, contact position, and target. A controlled shot can be more useful than a rushed attempt at a winner.",
      },
    ],
    cta: {
      title: "Learn the shots, then take them onto the court",
      paragraphs: [
        "**Pickleball Foundations** gives the serve, return, drive, dink, and volley their own visual lessons and practical exercises. It also introduces the drop, lob, and overhead.",
        "Follow a structured path through rules, scoring, positioning, strategy, and practice—and check your understanding as you go.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Further reference:** [USA Pickleball’s explanations of basic shots and terms](https://usapickleball.org/pickleball-skills/level-one/pickleball-basic-terms/).",
  },
  {
    slug: "where-to-stand",
    title: "Where to stand and how to move in pickleball doubles",
    topic: "Footwork & positioning",
    summary:
      "Start balanced, move to the ball, stop before you swing, and share the court side by side with your partner.",
    answer: [
      "In pickleball doubles, **the serving pair usually starts back, while the receiving pair starts with the receiver back and their partner near the kitchen line**.",
      "After the return, positioning changes. Look for opportunities to advance, get balanced for the next shot, and cover the court with your partner.",
      "There is no single spot where you should stand throughout a rally. Your position depends on the ball, your opponents, and the time your previous shot creates.",
    ],
    figure: {
      src: "/ready-position.jpg",
      alt: "A ready stance with feet apart, soft knees, relaxed elbows, the paddle in front, and eyes on the play.",
    },
    seo: {
      title: "Pickleball Doubles Positioning: Where to Stand | SkillDink",
      description:
        "Learn where to stand in pickleball doubles when serving, receiving, and rallying. Understand kitchen positioning, split steps, and moving with a partner.",
      canonical: "https://skilldink.com/guides/where-to-stand",
      ogTitle: "Where to Stand in Pickleball Doubles | SkillDink",
      ogDescription:
        "Find your starting position, move towards the kitchen with control, and learn how to cover the court with your partner.",
      imageAlt:
        "Pickleball doubles positioning showing the server, receiver, their partners, and movement towards the kitchen.",
    },
    body: [
      { type: "h2", text: "Where should all four players start?" },
      {
        type: "p",
        text: "These are useful starting positions for ordinary beginner doubles, rather than advanced arrangements such as stacking.",
      },
      {
        type: "table",
        headers: ["Player", "Typical starting position", "Why"],
        rows: [
          [
            "Server",
            "Behind the baseline on the correct serving side",
            "To serve legally into the diagonal service court.",
          ],
          [
            "Server’s partner",
            "Near or behind the baseline",
            "To leave space for the return to bounce.",
          ],
          [
            "Receiver",
            "Around or behind the baseline, diagonally opposite the server",
            "To receive after the serve bounces.",
          ],
          [
            "Receiver’s partner",
            "Near the kitchen line, outside the zone",
            "To be prepared for the rally after the return.",
          ],
        ],
      },
      {
        type: "p",
        text: "The receiving team does not need both players to begin at the back.",
      },
      {
        type: "p",
        text: "For the score and correct serving side, see our [pickleball scoring guide](/guides/pickleball-scoring).",
      },
      { type: "h2", text: "Positioning when your team serves" },
      {
        type: "p",
        text: "After serving, resist the urge to follow the ball straight to the net.",
      },
      {
        type: "p",
        text: "The return must bounce before your team hits it. Starting too far forward can leave a deep return behind you or tempt you into an illegal volley.",
      },
      {
        type: "p",
        text: "Once you have played the return, judge the reply your shot is likely to produce. Advance when you have time; stay ready to defend when opponents can attack.",
      },
      { type: "h2", text: "Positioning when your team receives" },
      {
        type: "p",
        text: "Give yourself enough room to handle a deep serve after its bounce. Adjust to the server rather than using exactly the same distance every time.",
      },
      {
        type: "p",
        text: "Aim for a return you can control, then start moving forward when practical. Your partner may already be near the kitchen.",
      },
      {
        type: "p",
        text: "You do not need to reach them before the next shot at all costs. If the opponent is about to hit, prepare where you are and continue your approach when another opportunity appears.",
      },
      { type: "h2", text: "Where should you stand near the kitchen?" },
      {
        type: "p",
        text: "A balanced position just behind the kitchen line gives you access to short balls without accidentally standing on the boundary.",
      },
      {
        type: "p",
        text: "Leave a comfortable margin rather than trying to place your toes precisely against the paint. Adjust your distance for the situation, including your reaction time and the opponent’s contact.",
      },
      {
        type: "p",
        text: "You may enter the kitchen to play a bounced ball. Before volleying afterwards, establish both feet outside it.",
      },
      {
        type: "p",
        text: "Read the [kitchen rules guide](/guides/the-kitchen) for line contact and momentum.",
      },
      { type: "h2", text: "Move through the transition zone in stages" },
      {
        type: "p",
        text: "The space between the baseline and kitchen line is commonly called the **transition zone**.",
      },
      {
        type: "p",
        text: "Opponents may make this area difficult by directing balls towards your feet. However, you cannot avoid it whenever you move forward—and stopping there to prepare is often the right decision.",
      },
      { type: "p", text: "Use this pattern:" },
      {
        type: "ol",
        items: [
          "Play a controlled shot.",
          "Move forward while time allows.",
          "Regain a ready base around the opponent’s contact.",
          "Respond to the next ball.",
          "Advance again when the opportunity returns.",
        ],
      },
      {
        type: "p",
        text: "**The kitchen line is a destination, not a deadline.**",
      },
      { type: "h2", text: "Build a ready position" },
      { type: "p", text: "Start with a stance you can move from:" },
      {
        type: "ul",
        items: [
          "Feet comfortably apart.",
          "Knees gently bent.",
          "Paddle in front of your body.",
          "Grip and shoulders relaxed.",
          "Attention on the ball and opponent.",
        ],
      },
      {
        type: "p",
        text: "Avoid settling onto your heels or letting the paddle hang behind you.",
      },
      {
        type: "p",
        text: "Your paddle height can change with the expected shot. Keep it available in front rather than forcing one exact position everywhere.",
      },
      { type: "h2", text: "Use a small split step" },
      {
        type: "p",
        text: "A split step is a small unloading and settling movement around the opponent’s contact. It helps you prepare to push towards the incoming ball.",
      },
      {
        type: "p",
        text: "It does not need to be a high jump. Begin with a modest movement that leaves you balanced and ready.",
      },
      {
        type: "p",
        text: "When approaching the kitchen, this preparation helps you control forward momentum. When covering a wide ball, it helps you change direction.",
      },
      { type: "h2", text: "Move with your partner" },
      {
        type: "p",
        text: "Each partner has an area to cover, but the court is shared.",
      },
      {
        type: "p",
        text: "If your partner moves wide, adjust towards that side enough to protect the middle. Avoid following so closely that both players cover the same ball.",
      },
      {
        type: "p",
        text: "As they recover, adjust again. Watch where the opponents can hit from, rather than returning automatically to one painted spot.",
      },
      {
        type: "p",
        text: "Partners often aim to become roughly side by side during established rallies. Temporary differences in depth are normal, especially during the return or while defending.",
      },
      { type: "h2", text: "Who takes the middle?" },
      {
        type: "p",
        text: "Agree before playing, then call unclear balls early.",
      },
      {
        type: "p",
        text: "A forehand preference can be useful when both players are equally well placed. It should not force one partner into a difficult stretch when the other has a comfortable shot.",
      },
      {
        type: "p",
        text: "Use “mine” or “yours” while there is still time to react. Once your partner commits, give them room and prepare to cover.",
      },
      { type: "h2", text: "Common positioning mistakes" },
      { type: "h3", text: "Both receivers starting at the baseline" },
      {
        type: "p",
        text: "The non-receiving partner can already prepare near the kitchen. They do not need to retreat simply because their partner is receiving.",
      },
      { type: "h3", text: "Moving forward regardless of shot quality" },
      {
        type: "p",
        text: "Watch what your ball allows the opponents to do. A weak, high reply may require you to defend before advancing.",
      },
      { type: "h3", text: "Treating midcourt as forbidden ground" },
      {
        type: "p",
        text: "Do not keep running merely to escape the transition zone. Prepare for the next ball, even if that means pausing halfway.",
      },
      { type: "h3", text: "Expecting perfect stillness on every shot" },
      {
        type: "p",
        text: "Some balls require movement through contact. Aim for control and balance rather than a rigid stop that prevents you from reaching the ball.",
      },
      { type: "h3", text: "Leaving the middle to your partner" },
      {
        type: "p",
        text: "Coverage needs an agreement and ongoing adjustment. Neither player owns every centre ball automatically.",
      },
      { type: "h2", text: "Try this: move, prepare, recover" },
      { type: "p", text: "With a partner or helper:" },
      {
        type: "ol",
        items: [
          "Start near the baseline with your paddle ready.",
          "Have the helper signal when an imaginary opponent is about to hit.",
          "Move forward in small stages between signals.",
          "Regain your ready base at each signal.",
          "Add left and right directions before returning to a useful position.",
        ],
      },
      {
        type: "p",
        text: "Then try gentle live feeds. Count how often you are prepared for the next ball, rather than how quickly you reach the kitchen.",
      },
      {
        type: "p",
        text: "Find more structure in our [beginner pickleball practice routine](/guides/pickleball-practice).",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Should both players stand at the kitchen?" },
      {
        type: "p",
        text: "Often during an established doubles rally, but not throughout the whole point. Serving and receiving create different starting positions, and some replies require defending from farther back.",
      },
      { type: "h3", text: "Should the server’s partner stand at the net?" },
      {
        type: "p",
        text: "For a simple beginner setup, staying back helps the serving team handle the return’s required bounce. Moving forward too early can create problems.",
      },
      { type: "h3", text: "Is standing in the transition zone against the rules?" },
      {
        type: "p",
        text: "No. It can be a demanding position, but you may play there. Preparing for the opponent’s shot matters more than reaching the kitchen immediately.",
      },
      { type: "h3", text: "Should you move forward after every return?" },
      {
        type: "p",
        text: "A controlled return commonly creates an opportunity to advance. Move as time allows and get ready for the next ball rather than sprinting through contact.",
      },
      { type: "h3", text: "Must the forehand player take every middle ball?" },
      {
        type: "p",
        text: "No. Position, balance, the incoming angle, and your agreement all matter.",
      },
      { type: "h3", text: "Do you have to stay in your service box during a rally?" },
      {
        type: "p",
        text: "No. The centreline helps define service courts; it is not a barrier restricting your movement during the rally. Correct serving and receiving positions still matter at the start of each point.",
      },
    ],
    cta: {
      title: "Build your movement foundations",
      paragraphs: [
        "**Pickleball Foundations** includes lessons on ready position, balanced movement, and court coverage, followed by simple strategy and practical drills.",
        "Use visual explanations and quick knowledge checks to understand where to move—and what to practise next.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Further reading:** [USA Pickleball’s positioning guidance](https://usapickleball.org/pickleball-skills/level-two/pickleball-basics-positioning-tips/) and [split-step explanation](https://usapickleball.org/pickleball-skills/level-four/how-to-master-the-split-step-for-faster-reactions/).",
  },
  {
    slug: "pickleball-strategy",
    title: "Pickleball strategy for beginners",
    topic: "Simple strategy",
    summary:
      "Move towards the kitchen when you have time, talk to your partner, and choose the shot you can make.",
    answer: [
      "A useful beginner pickleball strategy is to **start rallies reliably, create time to improve your position, and choose shots you can control**.",
      "In doubles, that also means working with a partner: deciding who takes unclear balls, covering the space they leave, and recognising when to attack or defend.",
      "You do not need complicated plays. Start with the decisions below and practise one at a time.",
    ],
    figure: {
      src: "/play-to-the-kitchen.jpg",
      alt: "The receiving team returns and moves up together. The serving team lets the return bounce, then advances in stages.",
    },
    seo: {
      title: "Pickleball Strategy for Beginners: Doubles Tips | SkillDink",
      description:
        "Build a simple pickleball doubles strategy: serve and return with purpose, advance towards the kitchen, communicate, and choose higher-percentage shots.",
      canonical: "https://skilldink.com/guides/pickleball-strategy",
      ogTitle: "Pickleball Strategy for Beginners | SkillDink",
      ogDescription:
        "Learn when to move forward, how to work with your partner, and which shots give you a better chance of staying in the rally.",
      imageAlt:
        "Pickleball doubles strategy showing controlled returns, movement towards the kitchen, and coordinated court coverage.",
      image: { src: "/play-to-the-kitchen.jpg", width: 1024, height: 576 },
    },
    body: [
      { type: "h2", text: "Seven beginner strategies at a glance" },
      {
        type: "table",
        headers: ["Strategy", "What to do"],
        rows: [
          ["Start consistently", "Use serves and returns you can repeat."],
          ["Create time", "Choose placement and pace that help you prepare."],
          ["Advance with control", "Move towards the kitchen when the next reply allows it."],
          ["Leave room for error", "Aim inside the lines rather than directly at them."],
          ["Read the situation", "Consider your balance, contact height, and opponents."],
          ["Work as a pair", "Call unclear balls and cover together."],
          ["Prepare again", "Recover your paddle and position after each shot."],
        ],
      },
      {
        type: "p",
        text: "For the starting positions and movement details, see [where to stand in pickleball doubles](/guides/where-to-stand).",
      },
      { type: "h2", text: "1. Start the rally with control" },
      {
        type: "p",
        text: "A missed serve gives you no opportunity to use the rest of your strategy.",
      },
      {
        type: "p",
        text: "Begin with a comfortable action and a generous target. As consistency improves, work towards deeper placement without aiming directly at the baseline.",
      },
      {
        type: "p",
        text: "Use the same approach on the return: favour a controlled ball over an ambitious winner.",
      },
      { type: "p", text: "**Your first question:** Can I start the rally reliably?" },
      { type: "h2", text: "2. Give the return a purpose" },
      {
        type: "p",
        text: "A deep return can keep the serving pair back and give the receiver time to advance towards their partner.",
      },
      {
        type: "p",
        text: "Depth is not the same as maximum speed. A manageable return with some height can give you more preparation time than a rushed, flat shot.",
      },
      {
        type: "p",
        text: "Leave space inside the baseline and notice what happens afterwards: were you ready for the opponent’s next contact?",
      },
      { type: "p", text: "**Your next question:** Did my return help me prepare?" },
      { type: "h2", text: "3. Advance towards the kitchen when you have time" },
      {
        type: "p",
        text: "Near the kitchen line, you can intercept more balls and reduce the opponents’ reaction time. But arriving off balance can leave you vulnerable.",
      },
      { type: "p", text: "The two teams approach differently:" },
      { type: "h3", text: "When receiving" },
      {
        type: "p",
        text: "After returning, look to move forward. Your partner may already be near the kitchen.",
      },
      {
        type: "p",
        text: "Prepare for the next shot even if you have not reached the line.",
      },
      { type: "h3", text: "When serving" },
      {
        type: "p",
        text: "Leave room for the return’s required bounce. Then use your next shot to build an approach.",
      },
      {
        type: "p",
        text: "A controlled drop can help; a drive may produce a manageable reply too. Judge the actual ball rather than assuming either choice guarantees a safe advance.",
      },
      { type: "p", text: "**Move when you can. Get ready when you need to.**" },
      { type: "h2", text: "4. Choose a target with room for error" },
      {
        type: "p",
        text: "A shot does not have to touch a line to be effective.",
      },
      {
        type: "p",
        text: "Aim comfortably inside the court. The middle can be a useful target because it provides space away from the sidelines and can reduce the angles opponents have available.",
      },
      {
        type: "p",
        text: "Crosscourt soft shots can also provide distance to work with, but avoid forcing a sharp angle when you are stretched.",
      },
      {
        type: "p",
        text: "Give the ball enough clearance to reach your target without floating an easy attack near the net.",
      },
      {
        type: "p",
        text: "**Your target should match the control you have today.**",
      },
      { type: "h2", text: "5. Match the shot to the situation" },
      { type: "p", text: "Before committing, notice:" },
      {
        type: "ul",
        items: [
          "Where you are standing.",
          "Whether you are balanced.",
          "The likely contact height.",
          "Where your opponents are positioned.",
        ],
      },
      {
        type: "table",
        headers: ["Situation", "A useful starting option"],
        rows: [
          ["Low, manageable ball near the kitchen", "A soft dink."],
          ["Ball sits up with time to prepare", "A controlled attacking shot."],
          ["You are back against opponents at the kitchen", "A drop or controlled drive, depending on the ball."],
          ["Opponents remain deep", "Consider keeping pressure on their backcourt."],
          ["You are stretched or late", "Simplify the reply and recover."],
        ],
      },
      {
        type: "p",
        text: "A soft shot is not automatically safer. A high dink may be attacked; a short reply may help opponents move forward.",
      },
      {
        type: "p",
        text: "Likewise, a harder shot can be useful without being hit at full power.",
      },
      {
        type: "p",
        text: "Explore the [pickleball shots guide](/guides/pickleball-shots) for the differences between drives, dinks, drops, and volleys.",
      },
      { type: "h2", text: "6. Communicate and cover with your partner" },
      {
        type: "p",
        text: "Agree before play how you will handle unclear middle balls.",
      },
      {
        type: "p",
        text: "Call “mine” or “yours” early enough for your partner to respond. Once one player commits, the other should give them space and prepare for the next ball.",
      },
      {
        type: "p",
        text: "If your partner moves wide, adjust to help protect the middle. Avoid following them all the way to the same shot.",
      },
      {
        type: "p",
        text: "A forehand preference can be useful, but it should not override a clearly better-positioned partner.",
      },
      { type: "h2", text: "7. Prepare after every shot" },
      {
        type: "p",
        text: "Do not watch your shot without preparing for the reply.",
      },
      {
        type: "p",
        text: "Bring the paddle back into a useful position, adjust your feet, and watch the opponent’s contact. If you are moving forward, regain a balanced base around the time they hit.",
      },
      {
        type: "p",
        text: "You may need to defend, hold your position, or move backwards. Progress in a rally is not always movement towards the net.",
      },
      { type: "h2", text: "Common beginner strategy mistakes" },
      { type: "h3", text: "Rushing forward after serving" },
      {
        type: "p",
        text: "Moving forward is not automatically a fault. The problem is losing space for the return’s bounce or volleying it illegally.",
      },
      { type: "h3", text: "Trying to finish every rally immediately" },
      {
        type: "p",
        text: "Choose an attack you can control rather than forcing a winner from a difficult position.",
      },
      { type: "h3", text: "Dinking regardless of opponent position" },
      {
        type: "p",
        text: "A short ball can bring a deep opponent forward. Notice where they are before choosing your target.",
      },
      { type: "h3", text: "Leaving the middle unclaimed" },
      {
        type: "p",
        text: "Make a simple agreement and communicate when the next ball could belong to either player.",
      },
      { type: "h3", text: "Judging decisions only by the result" },
      {
        type: "p",
        text: "A sensible shot can miss. A poor choice can get lucky. Review whether the target and pace suited the situation, not just who won.",
      },
      { type: "h2", text: "Try this: play with one focus" },
      {
        type: "p",
        text: "Use ordinary serving and kitchen rules, but choose one practice goal for a short set of rallies:",
      },
      {
        type: "ul",
        items: [
          "Return towards a generous deep target.",
          "Prepare before the opponent’s next contact.",
          "Call unclear middle balls early.",
          "Reduce forced attacks from poor balance.",
        ],
      },
      {
        type: "p",
        text: "Keep normal scoring separate from your practice measure.",
      },
      {
        type: "p",
        text: "After ten rallies, compare notes with your partner. What became easier? What situation still caused hesitation?",
      },
      {
        type: "p",
        text: "Use our [beginner practice routine](/guides/pickleball-practice) to turn that observation into another session.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "What is the best strategy for a beginner?" },
      {
        type: "p",
        text: "Start with reliable serves and returns, manageable targets, and good preparation. Add movement and partner coordination gradually.",
      },
      { type: "h3", text: "Should you always rush to the kitchen?" },
      {
        type: "p",
        text: "No. Work towards a useful position while staying ready for the next ball. A controlled approach may take several shots.",
      },
      { type: "h3", text: "Is dinking always better than driving?" },
      {
        type: "p",
        text: "No. They solve different problems. Your position, the incoming ball, and your opponents determine which option fits.",
      },
      { type: "h3", text: "Should beginners avoid attacking?" },
      {
        type: "p",
        text: "No. Practise recognising a comfortable opportunity rather than attacking every ball. Control and balance matter more than maximum power.",
      },
      { type: "h3", text: "Should you always aim at the weaker opponent?" },
      {
        type: "p",
        text: "You can adapt to differences between opponents, but avoid making your own shot unnecessarily difficult. In cooperative or introductory play, follow the session’s aim and help everyone participate.",
      },
      { type: "h3", text: "Does this strategy apply to singles?" },
      {
        type: "p",
        text: "Some principles transfer, including preparation and target selection. Singles has different coverage demands because you have no partner, so this guide focuses on doubles.",
      },
    ],
    cta: {
      title: "Turn strategy into decisions you can practise",
      paragraphs: [
        "**Pickleball Foundations** brings together kitchen approaches, teamwork, and safer shot selection in its simple strategy module.",
        "Visual lessons, practical exercises, and quick quizzes help you connect those choices with the rules, shots, and positioning covered throughout the course.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Further reading:** [USA Pickleball’s doubles strategy tips](https://usapickleball.org/pickleball-skills/level-three/pickleball-doubles-strategy-tips/).",
  },
  {
    slug: "pickleball-practice",
    title: "A simple pickleball practice routine for beginners",
    topic: "Practice",
    summary:
      "Twenty minutes is enough: warm up, serve, return, then play with one focus and write down a single result.",
    answer: [
      "A useful pickleball practice session gives you **one clear focus, repeatable attempts, and something to review afterwards**.",
      "You do not need a long list of drills. This 20-minute routine covers gentle movement, serves, returns, and short rallies with a purpose.",
      "Use it as a starting structure. Extend the warm-up or any practice block when needed rather than rushing to follow the clock.",
    ],
    figure: {
      src: "/a-simple-practice-plan.jpg",
      alt: "A 20-minute plan: warm up, serve, return, then play with one focus, and record one result.",
    },
    seo: {
      title: "Pickleball Practice for Beginners: A 20-Minute Plan | SkillDink",
      description:
        "Follow a simple 20-minute pickleball practice routine with beginner drills for serves, returns, and dinks. Includes solo options and progress tracking.",
      canonical: "https://skilldink.com/guides/pickleball-practice",
      ogTitle: "A 20-Minute Pickleball Practice Plan | SkillDink",
      ogDescription:
        "Warm up, practise serves and returns, then play with one focus. A practical beginner routine with simple ways to track your progress.",
      imageAlt:
        "A four-block pickleball practice plan covering warm-up, serves, returns, and purposeful play.",
      image: { src: "/a-simple-practice-plan.jpg", width: 1024, height: 682 },
    },
    body: [
      { type: "h2", text: "Your 20-minute pickleball practice plan" },
      {
        type: "table",
        headers: ["Time", "Activity", "Main focus"],
        rows: [
          ["0–5 minutes", "Gentle movement and cooperative dinks", "Find your balance and touch."],
          ["5–10 minutes", "Serving practice", "Repeat a legal serve towards a generous target."],
          ["10–15 minutes", "Return practice", "Control the return and prepare for the next shot."],
          ["15–20 minutes", "Purposeful rallies", "Apply one habit during play."],
        ],
      },
      {
        type: "p",
        text: "**You need:** A court and net, a paddle for each player, suitable balls, court shoes, and a partner.",
      },
      {
        type: "p",
        text: "A timer and a short note on your phone are helpful. Several balls make serving practice easier, provided loose balls are kept out of the playing area.",
      },
      { type: "h2", text: "Before you start: choose one focus" },
      {
        type: "p",
        text: "Pick something you can notice during the session.",
      },
      { type: "p", text: "For example:" },
      {
        type: "ul",
        items: [
          "Land more legal serves.",
          "Give returns more room inside the baseline.",
          "Use a smaller swing on dinks.",
          "Get balanced for the opponent’s next shot.",
          "Call unclear middle balls earlier.",
        ],
      },
      {
        type: "p",
        text: "You can practise several activities while keeping one main focus. That gives the session a direction without making every shot a separate technical project.",
      },
      { type: "h2", text: "Minutes 0–5: move gently and find your touch" },
      {
        type: "p",
        text: "Begin with easy movement around the court, comfortable side steps, and relaxed paddle swings. Gradually increase the movement before adding harder shots.",
      },
      {
        type: "p",
        text: "Then start cooperative dinking with your partner. Aim into a generous area of the opposite kitchen and keep the pace manageable.",
      },
      {
        type: "p",
        text: "Let each ball bounce during this exercise. You are finding controlled contact rather than trying to win.",
      },
      {
        type: "p",
        text: "**Check:** Can you move comfortably, meet the ball in front, and keep a short rally going?",
      },
      {
        type: "p",
        text: "Take longer if you need more preparation. Five minutes is a planning block, not a requirement to begin faster play.",
      },
      { type: "h2", text: "Minutes 5–10: practise serves" },
      {
        type: "p",
        text: "One player serves while the other receives or collects. Change roles halfway through.",
      },
      { type: "h3", text: "Setup" },
      {
        type: "p",
        text: "Stand behind the baseline and serve diagonally into the correct service court. Begin with a target comfortably inside the boundaries.",
      },
      { type: "h3", text: "Task" },
      {
        type: "p",
        text: "Use your normal serving action and count a set of ten attempts. If time allows, practise from both sides.",
      },
      { type: "h3", text: "Measure" },
      {
        type: "p",
        text: "Record **legal serves out of attempts**. Keep right-side and left-side results separate.",
      },
      { type: "p", text: "For example:" },
      { type: "p", text: "**Right side: 7/10**" },
      { type: "p", text: "**Left side: 6/10**" },
      {
        type: "p",
        text: "If you are also aiming at a smaller target, record target hits separately. A legal serve can miss your practice target and still be in.",
      },
      { type: "p", text: "**Focus:** Control before extra pace." },
      {
        type: "p",
        text: "Review the [serving rules](/guides/pickleball-rules) if you are unsure what counts as legal.",
      },
      { type: "h2", text: "Minutes 10–15: return, move, and get ready" },
      {
        type: "p",
        text: "Use the same pair, but make the receiver’s actions the focus. Change roles halfway through.",
      },
      { type: "h3", text: "Setup" },
      {
        type: "p",
        text: "The server sends manageable diagonal serves. The receiver starts with enough space to allow the bounce.",
      },
      { type: "h3", text: "Task" },
      {
        type: "p",
        text: "Return towards a generous deep area, then begin moving forward. The server lets the return bounce and plays a controlled third shot.",
      },
      {
        type: "p",
        text: "The receiver prepares for that contact, even if still partway towards the kitchen. Play one more shot, then reset.",
      },
      { type: "h3", text: "Measure" },
      { type: "p", text: "Choose one thing to count:" },
      {
        type: "ul",
        items: [
          "Returns landing in your target area.",
          "Attempts where you were balanced for the next shot.",
        ],
      },
      {
        type: "p",
        text: "**Focus:** A useful return followed by preparation—not a race to the kitchen.",
      },
      {
        type: "p",
        text: "For more detail, read [where to stand and how to move in doubles](/guides/where-to-stand).",
      },
      { type: "h2", text: "Minutes 15–20: play with one purpose" },
      {
        type: "p",
        text: "Now apply your chosen focus in short rallies.",
      },
      {
        type: "p",
        text: "With four players, use ordinary doubles. With two, play cooperative full-court rallies or agree on a clearly defined practice area.",
      },
      {
        type: "p",
        text: "Begin with a legal serve and follow the two-bounce rule. You do not need to finish a game.",
      },
      { type: "p", text: "After each rally, ask one relevant question:" },
      {
        type: "ul",
        items: [
          "Did I choose a manageable target?",
          "Was my paddle ready?",
          "Did I get balanced?",
          "Did we communicate before both reaching for the same ball?",
        ],
      },
      {
        type: "p",
        text: "Keep any practice tally separate from normal game scoring.",
      },
      {
        type: "p",
        text: "**Focus:** Use the skill when the next ball is less predictable.",
      },
      { type: "h2", text: "Record one result and one next step" },
      {
        type: "p",
        text: "Keep your note short enough that you will actually write it.",
      },
      {
        type: "table",
        headers: ["What to record", "Example"],
        rows: [
          ["Drill", "Ten serves from the right."],
          ["Target", "Anywhere in the correct service court."],
          ["Result", "Seven legal serves out of ten."],
          ["Next step", "Repeat the same setup and aim farther inside the sideline."],
        ],
      },
      {
        type: "p",
        text: "Use comparable conditions when reviewing results. A smaller target, stronger wind, different ball, or more difficult feed can change the score.",
      },
      {
        type: "p",
        text: "One better result does not prove lasting improvement, and one worse result does not mean you have gone backwards. Look for a pattern across several sessions.",
      },
      { type: "h2", text: "Three beginner drills you can repeat" },
      { type: "h3", text: "1. Ten serves to one service court" },
      {
        type: "p",
        text: "Keep the serving side and target consistent for the set.",
      },
      { type: "p", text: "**Count:** Legal serves out of ten." },
      { type: "h3", text: "2. Twenty cooperative dinks" },
      {
        type: "p",
        text: "Rally with a partner, restarting gently whenever the ball is missed. Each player counts their own attempts; exclude starting feeds.",
      },
      {
        type: "p",
        text: "**Count:** How many of your twenty attempts land in the opposite kitchen.",
      },
      { type: "h3", text: "3. Ten returns with preparation" },
      {
        type: "p",
        text: "Use predictable serves, return with control, and prepare for the server’s next contact.",
      },
      { type: "p", text: "**Count:** How often you are ready for the next shot." },
      {
        type: "p",
        text: "Make an exercise easier by enlarging the target or simplifying the feed. Increase difficulty gradually rather than changing several variables together.",
      },
      { type: "h2", text: "Can you practise pickleball alone?" },
      {
        type: "p",
        text: "Yes. Some useful options do not need a partner.",
      },
      {
        type: "table",
        headers: ["Available space", "Practice option"],
        rows: [
          ["Court and net", "Counted serves towards a consistent target."],
          ["Suitable practice wall", "Gentle paddle control and cooperative-style rebounds."],
          ["Clear space without a ball", "Ready position, small adjustment steps, and shadow swings."],
        ],
      },
      {
        type: "p",
        text: "Use a wall where practice is permitted and where balls will not disturb other people.",
      },
      {
        type: "p",
        text: "Solo work helps you repeat an action. Partner practice adds incoming-ball variation, decisions, and shared court coverage.",
      },
      { type: "h2", text: "Common practice mistakes" },
      { type: "h3", text: "Changing the target every few attempts" },
      {
        type: "p",
        text: "Complete a comparable set before judging the result.",
      },
      { type: "h3", text: "Adding pace before control" },
      {
        type: "p",
        text: "If the ball rarely reaches the intended area, simplify the task first.",
      },
      { type: "h3", text: "Treating every feed as a competition" },
      {
        type: "p",
        text: "Cooperative drills work best when both players help create useful repetitions.",
      },
      { type: "h3", text: "Only drilling—or only playing games" },
      {
        type: "p",
        text: "Drills provide repetition. Games test decisions and adaptability. Include both when your time allows.",
      },
      { type: "h3", text: "Tracking too many things" },
      {
        type: "p",
        text: "One useful measure is easier to maintain than a complicated scorecard.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Is twenty minutes enough to practise?" },
      {
        type: "p",
        text: "It is a manageable starting session. What you practise, how focused the attempts are, and how regularly you return all matter. Longer sessions can also be useful.",
      },
      { type: "h3", text: "What should a beginner practise first?" },
      {
        type: "p",
        text: "Begin with legal serves, controlled returns, and the opening rally sequence. Add dinks, volleys, and movement as those foundations become more familiar.",
      },
      { type: "h3", text: "How often should I practise?" },
      {
        type: "p",
        text: "Choose a routine you can sustain around your playing opportunities. Set a specific next session rather than waiting until you have time for a perfect programme.",
      },
      { type: "h3", text: "Should I try to beat my score every session?" },
      {
        type: "p",
        text: "No. Keep the task comparable and review several results. Progress is not always a straight upward line.",
      },
      { type: "h3", text: "Do I need to buy training equipment?" },
      {
        type: "p",
        text: "Not for this routine. A basic court setup, ordinary playing equipment, and a partner are enough. Targets can be agreed areas rather than purchased accessories.",
      },
      { type: "h3", text: "What should I do if a drill is too difficult?" },
      {
        type: "p",
        text: "Use a larger target, slower feed, or shorter distance where appropriate. Build controlled repetitions before restoring the harder version.",
      },
    ],
    cta: {
      title: "Keep the routine and build your skills",
      paragraphs: [
        "**Pickleball Foundations** combines a simple practice plan with repeatable drills, visual explanations, and quick checks on what you understand.",
        "The course also covers rules, scoring, essential shots, positioning, and beginner strategy, so you can choose practice that addresses a specific gap.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
  },
  {
    slug: "first-pickleball-game",
    title: "Your first pickleball game: what to expect",
    topic: "Ready to play",
    summary:
      "Find a beginner session, say you are new, call the score, and treat the kitchen and the rotation as part of the game.",
    answer: [
      "For your first pickleball game, choose a session that welcomes beginners, tell the organiser you are learning, and ask how the games work.",
      "You do not need to arrive with every shot mastered. A basic understanding of the serve, the two-bounce rule, and the kitchen gives you a useful starting point.",
      "The pace, scoring, and rotation vary between venues. Checking those details beforehand makes joining in much easier.",
    ],
    figure: {
      src: "/play-your-first-games.jpg",
      alt: "Three first-game habits: find beginner play, say you are new, and call the score, respect the kitchen, and get ready.",
    },
    seo: {
      title: "Your First Pickleball Game: What to Expect | SkillDink",
      description:
        "Prepare for your first pickleball game: find beginner play, know what to bring, understand court etiquette, and choose a simple focus for your session.",
      canonical: "https://skilldink.com/guides/first-pickleball-game",
      ogTitle: "Your First Pickleball Game: A Beginner’s Guide",
      ogDescription:
        "Know what to bring, what to ask, and how to join your first pickleball session with confidence.",
      imageAlt:
        "Beginner pickleball players finding a suitable session, introducing themselves, and practising good court habits.",
      image: { src: "/play-your-first-games.jpg", width: 1024, height: 599 },
    },
    body: [
      { type: "h2", text: "Your first-session checklist" },
      {
        type: "table",
        headers: ["Before you go", "When you arrive"],
        rows: [
          ["Confirm the session welcomes first-time players.", "Introduce yourself to the organiser."],
          ["Check booking, payment, and equipment arrangements.", "Ask how courts and partners are allocated."],
          ["Wear suitable court shoes and comfortable clothing.", "Confirm the scoring format and game length."],
          ["Bring water and any equipment requested.", "Warm up gradually before playing."],
          ["Review the opening rally sequence.", "Tell your partner what you are learning."],
        ],
      },
      { type: "h2", text: "Find a session that suits your experience" },
      {
        type: "p",
        text: "Look for an introduction, beginner session, or organised social play that explicitly welcomes new players.",
      },
      {
        type: "p",
        text: "“Open play” describes a way of joining games; it does not automatically mean instruction is included or that every ability level is suitable.",
      },
      { type: "p", text: "If the description is unclear, ask:" },
      {
        type: "p",
        text: "**“I’m new to pickleball and still learning the scoring and positioning. Is this session suitable for my first games?”**",
      },
      {
        type: "p",
        text: "Also check whether you need to book, pay in advance, or bring a partner.",
      },
      { type: "h3", text: "Do you need a rating?" },
      {
        type: "p",
        text: "Some sessions use ratings or experience categories to organise players. Others simply welcome beginners.",
      },
      {
        type: "p",
        text: "Rather than guessing a number, describe your experience honestly. An introductory course, a few casual rallies, and regular match play are different starting points.",
      },
      {
        type: "p",
        text: "If the session has an entry requirement, ask the organiser how they assess it.",
      },
      { type: "h2", text: "What should you bring?" },
      { type: "p", text: "Bring:" },
      {
        type: "ul",
        items: [
          "Court shoes suitable for the surface.",
          "Comfortable clothing you can move in.",
          "Water.",
          "A paddle and suitable balls if the venue requests them.",
          "Any booking confirmation or payment details needed.",
        ],
      },
      {
        type: "p",
        text: "Ask about loan equipment before buying everything. An introductory session may supply paddles and balls, but this is not guaranteed.",
      },
      { type: "h2", text: "What happens when you arrive?" },
      {
        type: "p",
        text: "Arrive early enough to check in, locate your court, and get familiar with the arrangements.",
      },
      { type: "p", text: "Introduce yourself, then ask:" },
      {
        type: "ul",
        items: [
          "**Where should I wait?**",
          "**Who will I play with?**",
          "**How do players rotate?**",
          "**Are games timed or played to a target score?**",
          "**Is someone available to help with scoring?**",
        ],
      },
      {
        type: "p",
        text: "Some sessions rotate partners after each game. Others use fixed groups, queues, or timed rounds. Follow the system explained by the organiser.",
      },
      { type: "h2", text: "What should you know before the first serve?" },
      {
        type: "p",
        text: "You do not need a complete rulebook in your head. Review these foundations:",
      },
      { type: "h3", text: "The opening two bounces" },
      {
        type: "p",
        text: "The receiver lets the serve bounce before returning it. The serving team then lets the return bounce before hitting.",
      },
      {
        type: "p",
        text: "Only after those two bounces may players volley, subject to the kitchen rules.",
      },
      { type: "h3", text: "The kitchen" },
      {
        type: "p",
        text: "You may enter the kitchen to play a bounced ball. You may not volley while touching it or its line, or let volleying momentum carry you in.",
      },
      { type: "h3", text: "The scoring format" },
      {
        type: "p",
        text: "Ask whether the group uses traditional or rally scoring.",
      },
      {
        type: "p",
        text: "In traditional doubles scoring, call your team’s score, the opponents’ score, and the server number. A new game starts at **0–0–2**.",
      },
      {
        type: "p",
        text: "For a refresher, read the [basic pickleball rules](/guides/pickleball-rules) and [doubles scoring guide](/guides/pickleball-scoring).",
      },
      { type: "h2", text: "Introduce yourself to your partner" },
      { type: "p", text: "Keep it simple:" },
      {
        type: "p",
        text: "**“Hi, I’m new. I know the basics, but I may need a reminder with the score.”**",
      },
      {
        type: "p",
        text: "You can also agree who will usually take unclear middle balls and whether you would welcome brief tips between rallies.",
      },
      {
        type: "p",
        text: "If you lose track of something, ask before the next serve. You do not need to pretend you understood.",
      },
      { type: "h2", text: "Take three habits into your first game" },
      { type: "h3", text: "1. Check and call the score" },
      {
        type: "p",
        text: "When serving, make sure the group agrees on the score and next server. Call clearly before hitting.",
      },
      { type: "h3", text: "2. Respect the kitchen" },
      {
        type: "p",
        text: "Notice your feet, the boundary line, and your balance when volleying.",
      },
      { type: "h3", text: "3. Prepare for the next ball" },
      {
        type: "p",
        text: "Recover your paddle in front, watch the play, and adjust your position with your partner.",
      },
      {
        type: "p",
        text: "These give you something manageable to focus on. You will still miss shots and forget things—that is part of learning.",
      },
      { type: "h2", text: "Basic pickleball etiquette" },
      { type: "h3", text: "Make honest line calls" },
      {
        type: "p",
        text: "Only call a ball out when you clearly see it out. Give the opponents the benefit of the doubt when uncertain.",
      },
      { type: "h3", text: "Respect neighbouring courts" },
      {
        type: "p",
        text: "Wait for a break before walking behind another game.",
      },
      {
        type: "p",
        text: "If a loose ball creates a danger, warn players promptly by calling **“Ball!”** Do not run into an active rally to retrieve it. A harmless ball away from players can wait until play stops.",
      },
      { type: "h3", text: "Be supportive" },
      {
        type: "p",
        text: "Use short calls such as “mine” or “yours” when needed. Encourage your partner and avoid unsolicited coaching.",
      },
      { type: "h3", text: "Follow the rotation" },
      {
        type: "p",
        text: "When your turn ends, thank the players and use the queue or waiting area as instructed. If you are unsure where to go next, ask.",
      },
      { type: "h2", text: "What if you keep missing?" },
      { type: "p", text: "Reduce the difficulty where you can." },
      {
        type: "p",
        text: "Use a comfortable swing, aim well inside the lines, and concentrate on starting the rally rather than hitting winners.",
      },
      {
        type: "p",
        text: "A brief apology is fine, but you do not need one after every ordinary mistake. Reset and give yourself another attempt.",
      },
      {
        type: "p",
        text: "If the games are consistently too fast to participate meaningfully, speak to the organiser about a more suitable court, group, or introductory session.",
      },
      { type: "h2", text: "After the session: choose one next step" },
      { type: "p", text: "Write down:" },
      { type: "p", text: "**One thing that went well.**" },
      { type: "p", text: "**One thing you want to practise.**" },
      { type: "p", text: "For example:" },
      { type: "p", text: "**Went well:** I remembered to let the return bounce." },
      { type: "p", text: "**Next focus:** Ten controlled serves before my next session." },
      {
        type: "p",
        text: "Choose a specific next action rather than deciding that everything needs work.",
      },
      {
        type: "p",
        text: "Our [beginner pickleball practice routine](/guides/pickleball-practice) gives you a simple structure to follow.",
      },
      { type: "h2", text: "Frequently asked questions" },
      { type: "h3", text: "Can I attend pickleball alone?" },
      {
        type: "p",
        text: "Some organised sessions accept individual bookings and allocate partners. Others require a group or court booking. Check before arriving.",
      },
      { type: "h3", text: "Do I need lessons before playing?" },
      {
        type: "p",
        text: "Not every beginner session requires previous lessons. Ask what experience is expected and whether instruction is included. An introduction can help if you would prefer guided practice first.",
      },
      { type: "h3", text: "What if I do not understand scoring?" },
      {
        type: "p",
        text: "Tell the organiser and your partner. Ask for a reminder before serving, and use the scoring guide between sessions.",
      },
      { type: "h3", text: "Will I change partners?" },
      {
        type: "p",
        text: "Possibly. It depends on the session’s format. Ask about rotation when you arrive rather than assuming it works the same everywhere.",
      },
      { type: "h3", text: "Should I buy an expensive paddle first?" },
      {
        type: "p",
        text: "You do not need to begin with an expensive purchase. Check whether you can borrow equipment, then use your first sessions to learn what feels comfortable.",
      },
      { type: "h3", text: "What if I am nervous about slowing people down?" },
      {
        type: "p",
        text: "Choose a session that explicitly welcomes beginners and explain your experience. That lets the organiser place you appropriately and sets clear expectations.",
      },
      { type: "h3", text: "How do I know whether the session went well?" },
      {
        type: "p",
        text: "Look beyond the score. Did you understand more rallies, ask useful questions, or identify something to practise? Those are useful outcomes from your first visit.",
      },
    ],
    cta: {
      title: "Feel more prepared before you play",
      paragraphs: [
        "**Pickleball Foundations** gives you a structured introduction to the rules, scoring, essential shots, positioning, and simple strategy.",
        "Visual lessons, practical exercises, and quick quizzes help you prepare before a session and revisit anything that felt confusing afterwards.",
      ],
      preview: "[Try a free lesson: How a rally works](/learn/how-a-rally-works).",
    },
    reference:
      "**Further reference:** [USA Pickleball’s sportsmanship guide](https://usapickleball.org/sportsmanship-guide/).",
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
