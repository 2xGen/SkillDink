import "server-only";

/** Static course content until player accounts and progress are stored in Supabase. */

/** The one lesson available before the course is purchased. */
export const freeLessonSlug = "how-a-rally-works";

export type LessonCheck = {
  prompt: string;
  options: { id: string; label: string }[];
  answerId: string;
  explanation: string;
};

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string; level?: 2 | 3 }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "figure";
      src: string;
      alt: string;
      wide?: boolean;
      width?: number;
      height?: number;
      kicker?: string;
      panels?: {
        title: string;
        detail?: string;
        src?: string;
        alt?: string;
        callout?: "start" | "end";
      }[];
      cues?: string[];
      line?: string;
      note?: string;
    };

export type Lesson = {
  slug: string;
  title: string;
  objective: string;
  summary: string;
  takeaway: string;
  practice: string[];
  practiceIntro?: string;
  practiceNote?: string;
  practiceOrdered?: boolean;
  check: LessonCheck;
  checks?: LessonCheck[];
  body?: LessonBlock[];
  closing?: string;
  ending?: { title: string; paragraphs: string[] };
};

export type Module = {
  number: number;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export const course = {
  slug: "pickleball-foundations",
  title: "Pickleball Foundations",
  price: 19,
  tagline: "The complete beginner's course to the game, from basics to simple strategy.",
  pitch:
    "A practical, visual course for new players. Learn the rules, key skills, and simple strategy you need to play and enjoy the game with confidence.",
  included: [
    "8 focused, beginner-friendly modules",
    "Visual lessons and on-court practice ideas",
    "A check at the end of every lesson",
    "A course assessment before you play",
  ],
  modules: [
    {
      number: 1,
      title: "Meet the game",
      summary: "What pickleball is, how the court is set up, and how a rally unfolds.",
      lessons: [
        {
          slug: "what-is-pickleball",
          title: "What is pickleball?",
          objective:
            "Explain what pickleball is, recognise singles and doubles, and identify the serving and receiving sides.",
          summary:
            "Pickleball is a paddle sport in which two players or two pairs hit a perforated plastic ball over a net, aiming to land it inside the opposite side of the court.",
          body: [
            {
              type: "p",
              text: "Pickleball is a paddle sport in which two players or two pairs hit a perforated plastic ball over a net, aiming to land it inside the opposite side of the court.",
            },
            {
              type: "p",
              text: "It combines shots played after a bounce with shots hit out of the air. Some exchanges are quick; others involve patient, controlled shots close to the net. You will learn when to use each as you progress through this course.",
            },
            { type: "h", text: "Singles or doubles?" },
            { type: "p", text: "You can play pickleball in two formats:" },
            {
              type: "bullets",
              items: [
                "**Singles:** one player against one player.",
                "**Doubles:** two players against two players.",
              ],
            },
            {
              type: "p",
              text: "This course focuses mainly on doubles. Having a partner adds another part to the game: communicating, sharing responsibility for the ball, and moving together to cover the court.",
            },
            { type: "h", text: "What happens during play?" },
            {
              type: "p",
              text: "Each rally begins with a **serve**: the shot that puts the ball into play.",
            },
            {
              type: "p",
              text: "The player or pair serving is the **serving side**. Their opponents are the **receiving side**.",
            },
            {
              type: "figure",
              src: "/serving-sides.jpg",
              alt: "An overhead view of a doubles court. The receiving team is at the far end and the serving team is at the near end. A dashed line shows the serve traveling diagonally.",
              width: 843,
              height: 1024,
            },
            {
              type: "p",
              text: "After the serve, players exchange shots across the net. That exchange is called a **rally**. The rally ends when play stops—for example, because the ball lands outside the court or a player cannot return it legally.",
            },
            {
              type: "p",
              text: "You do not need to understand every rule yet. For now, recognise the basic sequence:",
            },
            { type: "p", text: "**Serve → return → exchange shots → rally ends.**" },
            {
              type: "p",
              text: "Later lessons explain when the ball must bounce, which shots are allowed, and how scoring works.",
            },
            { type: "h", text: "What makes the game interesting?" },
            {
              type: "p",
              text: "Pickleball gives you several ways to create a difficult ball for your opponents. You can change its direction, speed, height, or depth.",
            },
            {
              type: "p",
              text: "A powerful shot can be useful, but so can a soft, well-placed ball. Learning to choose between those options is part of learning the game.",
            },
          ],
          takeaway:
            "Your first goal is to understand what is happening and keep the ball in play. You can build power, variety, and more advanced tactics over time.",
          practiceIntro: "Watch a doubles rally, either in person or in a recording.",
          practiceOrdered: true,
          practice: [
            "Identify the serving pair and the receiving pair.",
            "Watch the serve and the return.",
            "Notice which shots are played after a bounce and which are hit out of the air.",
            "Observe how the partners move as the ball changes direction.",
          ],
          practiceNote:
            "You do not need to judge their technique. Just follow the ball and notice how the game unfolds.",
          check: {
            prompt: "A friend asks what pickleball is. Which description is most accurate?",
            options: [
              {
                id: "either",
                label: "A paddle sport played across a net, either one against one or two against two.",
              },
              { id: "four", label: "A racket sport that must always be played with four players." },
              { id: "bounce", label: "A paddle sport in which every shot must bounce before it is returned." },
            ],
            answerId: "either",
            explanation:
              "Pickleball can be played as singles or doubles. It includes both shots played after a bounce and shots hit out of the air, subject to rules you will learn later.",
          },
          checks: [
            {
              prompt: "A friend asks what pickleball is. Which description is most accurate?",
              options: [
                {
                  id: "either",
                  label: "A paddle sport played across a net, either one against one or two against two.",
                },
                { id: "four", label: "A racket sport that must always be played with four players." },
                {
                  id: "bounce",
                  label: "A paddle sport in which every shot must bounce before it is returned.",
                },
              ],
              answerId: "either",
              explanation:
                "Pickleball can be played as singles or doubles. It includes both shots played after a bounce and shots hit out of the air, subject to rules you will learn later.",
            },
            {
              prompt: "You and your partner are waiting for your opponents to serve. Which side are you?",
              options: [
                { id: "serving", label: "The serving side." },
                { id: "receiving", label: "The receiving side." },
              ],
              answerId: "receiving",
              explanation:
                "The receiving side faces the serve. These roles change during the game; they are not permanent team names.",
            },
          ],
          closing:
            "Pickleball is a paddle sport played across a net as singles or doubles. Each rally starts with a serve, and success involves choosing shots and covering the court.",
        },
        {
          slug: "court-and-equipment",
          title: "The court and equipment",
          objective:
            "Identify the main court lines, locate both kitchen zones, and name the equipment you need to play.",
          summary:
            "A pickleball court is 20 feet wide and 44 feet long, the same size for singles and doubles. Each half has a kitchen and two service courts. You need a paddle, a ball, court shoes, and a court with a net.",
          body: [
            {
              type: "p",
              text: "Before you start hitting, take a moment to understand your surroundings. Knowing the court's layout makes the rules, scoring, and positioning much easier to follow.",
            },
            { type: "h", text: "Find your way around the court" },
            {
              type: "p",
              text: "A pickleball court is **20 feet wide and 44 feet long**—approximately **6.10 × 13.41 metres**.",
            },
            {
              type: "p",
              text: "Singles and doubles use the same court dimensions. You do not switch to a narrower court for singles.",
            },
            {
              type: "p",
              text: "The net divides the court into two equal halves. Each half contains a kitchen zone and two service courts.",
            },
            {
              type: "figure",
              src: "/court-equipment.jpg",
              alt: "Labeled pickleball court, 20 feet by 44 feet, showing the baseline, sideline, kitchen line, kitchen, net, centreline, and left and right service courts, beside a paddle, a pickleball, and court shoes.",
              wide: true,
              width: 1024,
              height: 581,
            },
            { type: "h", text: "The baseline", level: 3 },
            {
              type: "p",
              text: "The baseline runs across the back of each half, parallel to the net.",
            },
            {
              type: "p",
              text: "You serve from behind it. During a rally, it also marks the back boundary of the court.",
            },
            { type: "h", text: "The sidelines", level: 3 },
            {
              type: "p",
              text: "The sidelines run along the two long edges of the court.",
            },
            {
              type: "p",
              text: "Together with the baselines, they mark the outside boundaries of the playing court.",
            },
            { type: "h", text: "The kitchen", level: 3 },
            {
              type: "p",
              text: "The **kitchen**, officially called the **non-volley zone**, extends **7 feet—approximately 2.13 metres—from the net on each side**.",
            },
            {
              type: "p",
              text: "There are two kitchen zones: one on your side and one on your opponents' side.",
            },
            {
              type: "p",
              text: "The kitchen line marks the edge of this zone furthest from the net. The line itself belongs to the kitchen.",
            },
            {
              type: "p",
              text: "You will explore its rules in a dedicated lesson. For now, remember that the kitchen is connected to restrictions on **volleying**, which means hitting the ball before it bounces. It is not an area you must always stay out of.",
            },
            { type: "h", text: "The centreline and service courts", level: 3 },
            {
              type: "p",
              text: "On each side, the centreline runs from the kitchen line to the baseline. It divides the area behind the kitchen into a **left service court** and a **right service court**.",
            },
            {
              type: "p",
              text: "These areas help you identify where a serve must land. The centreline does not continue through the kitchen.",
            },
            { type: "h", text: "The net", level: 3 },
            {
              type: "p",
              text: "The net stretches across the middle of the court. It is slightly lower in the centre:",
            },
            {
              type: "bullets",
              items: [
                "**At the sidelines:** 36 inches, approximately 91.4 cm.",
                "**At the centre:** 34 inches, approximately 86.4 cm.",
              ],
            },
            {
              type: "p",
              text: "You do not need to memorise these heights to begin playing.",
            },
            { type: "h", text: "What equipment do you need?" },
            { type: "h", text: "A pickleball paddle", level: 3 },
            {
              type: "p",
              text: "A paddle has a solid hitting surface rather than strings.",
            },
            {
              type: "p",
              text: "To start, use one that feels comfortable to hold and manageable to swing. Borrowing a paddle lets you try the game before choosing your own.",
            },
            { type: "h", text: "A pickleball", level: 3 },
            {
              type: "p",
              text: "Pickleball uses a lightweight, perforated plastic ball.",
            },
            {
              type: "p",
              text: "Balls are made for different playing conditions. If you are joining an existing group, ask which ball they use so you practise with the same type.",
            },
            { type: "h", text: "Suitable footwear", level: 3 },
            {
              type: "p",
              text: "You do not need pickleball-specific shoes. **Tennis hard-court shoes** can work well on outdoor hard courts, while **indoor tennis or other indoor court shoes** can suit sports-hall surfaces.",
            },
            {
              type: "p",
              text: "Choose shoes with a secure fit, support for side-to-side movement, and grip appropriate for the surface. Indoor venues may require **non-marking soles**.",
            },
            {
              type: "p",
              text: "Running shoes are generally less suited to the repeated sideways movements and changes of direction involved in pickleball.",
            },
            { type: "h", text: "Access to a court and net", level: 3 },
            {
              type: "p",
              text: "You need a correctly marked playing area and a suitable net. A venue may already provide both; check what is available before you arrive.",
            },
            {
              type: "p",
              text: "You may also encounter pickleball played on a **badminton doubles court with a lowered net or a portable pickleball net**. Its outside dimensions are almost identical, but the markings differ.",
            },
            {
              type: "p",
              text: "The main difference to recognise is near the net: badminton’s short service line is approximately **15 cm (6 inches) closer to the net** than pickleball’s kitchen line. For a correctly marked pickleball court, a kitchen line must be added **7 feet (2.13 metres) from the net on both sides**.",
            },
            {
              type: "p",
              text: "Before playing on a shared court, confirm which lines you are using.",
            },
          ],
          takeaway:
            "Your first equipment setup can be simple. A comfortable paddle, a suitable ball, and appropriate footwear are enough to get started at an equipped venue.",
          practiceIntro: "Before play begins:",
          practiceOrdered: true,
          practice: [
            "Stand behind a baseline and face the net.",
            "Find the sidelines on your left and right.",
            "Locate the kitchen line on your side.",
            "Find the matching kitchen zone across the net.",
            "Follow the centreline from your baseline to the kitchen line.",
            "Point to the left and right service courts.",
          ],
          practiceNote:
            "If several sports share the surface, ask someone to identify the pickleball lines before you play.",
          check: {
            prompt: "Where are the kitchen zones?",
            options: [
              { id: "sidelines", label: "Along the outside of both sidelines." },
              { id: "beside", label: "Immediately beside the net, one on each side." },
              { id: "baseline", label: "Behind each baseline." },
            ],
            answerId: "beside",
            explanation: "Each half has a kitchen extending from the net to its kitchen line.",
          },
          checks: [
            {
              prompt: "Where are the kitchen zones?",
              options: [
                { id: "sidelines", label: "Along the outside of both sidelines." },
                { id: "beside", label: "Immediately beside the net, one on each side." },
                { id: "baseline", label: "Behind each baseline." },
              ],
              answerId: "beside",
              explanation: "Each half has a kitchen extending from the net to its kitchen line.",
            },
            {
              prompt: "What does the centreline divide?",
              options: [
                { id: "courts", label: "The left and right service courts on each side." },
                { id: "halves", label: "Your team's half from your opponents' half." },
                { id: "kitchen", label: "The kitchen into two separate zones." },
              ],
              answerId: "courts",
              explanation:
                "The centreline divides the service courts and stops at the kitchen line. The net separates the two halves.",
            },
            {
              prompt: "Do you use a narrower court for singles?",
              options: [
                { id: "yes", label: "Yes." },
                { id: "no", label: "No." },
              ],
              answerId: "no",
              explanation: "The court dimensions are the same for singles and doubles.",
            },
          ],
          closing:
            "Recognise the boundaries, find both kitchen zones, and identify the service courts. Bring a paddle, a suitable ball, and court shoes—you can learn the rest step by step.",
        },
        {
          slug: "how-a-rally-works",
          title: "How a rally works",
          objective:
            "Describe how a rally starts, explain the two required bounces, and recognise common ways a rally ends.",
          summary:
            "A rally starts with a diagonal serve. The serve must bounce on the receiving side, and the return must bounce on the serving side. After those two bounces, players may hit after a bounce or volley. A fault ends the rally.",
          body: [
            {
              type: "p",
              text: "A **rally** is the sequence of play that starts with a serve and continues until the ball is no longer in play.",
            },
            {
              type: "p",
              text: "Understanding this sequence will help you follow a game—even before you know how to keep score.",
            },
            { type: "h", text: "1. The serve starts play" },
            {
              type: "p",
              text: "The server sends the ball diagonally across the net into the opposite service court, beyond the kitchen.",
            },
            {
              type: "p",
              text: "The player diagonally opposite the server receives the serve. Their first shot back is called the **return**.",
            },
            { type: "h", text: "2. The receiving side lets the serve bounce" },
            {
              type: "p",
              text: "The receiver must let the serve bounce before hitting it.",
            },
            {
              type: "p",
              text: "They cannot hit the serve out of the air.",
            },
            {
              type: "p",
              text: "**First required bounce: the serve lands on the receiving side.**",
            },
            { type: "h", text: "3. The serving side lets the return bounce" },
            {
              type: "p",
              text: "After the receiver hits the return, the serving side must also let the ball bounce before hitting it.",
            },
            {
              type: "p",
              text: "Even if the return looks easy to reach, the serving side cannot volley it.",
            },
            {
              type: "p",
              text: "**Second required bounce: the return lands on the serving side.**",
            },
            {
              type: "p",
              text: "Together, these requirements are called the **two-bounce rule**: one bounce on each side at the beginning of the rally.",
            },
            {
              type: "figure",
              src: "/two-bounce-players.jpg",
              alt: "Three court diagrams of the two-bounce rule, with players on the court and outside it. The serve bounces on the receiving side, the return bounces on the serving side, then a player volleys from outside the kitchen. One bounce on each side, not two bounces on one side.",
              wide: true,
              width: 1024,
              height: 682,
            },
            { type: "h", text: "4. The rally continues" },
            {
              type: "p",
              text: "Once those two required bounces have happened, players can choose to:",
            },
            {
              type: "bullets",
              items: [
                "**Play after a bounce:** let the ball bounce once before hitting it.",
                "**Volley:** hit the ball before it bounces, provided the kitchen rules allow it.",
              ],
            },
            {
              type: "p",
              text: "The ball does not have to bounce before every shot. Equally, you do not have to volley just because you are allowed to.",
            },
            {
              type: "p",
              text: "Your aim is to return the ball legally and make the next shot difficult for your opponents.",
            },
            { type: "h", text: "5. A fault ends the rally" },
            {
              type: "p",
              text: "A **fault** is a rule violation that stops play.",
            },
            {
              type: "p",
              text: "Common examples include:",
            },
            {
              type: "bullets",
              items: [
                "Hitting the ball so it lands outside the court.",
                "Failing to return the ball over the net.",
                "Letting the ball bounce twice on your side.",
                "Hitting the serve or return before its required bounce.",
                "Volleying while touching the kitchen or its line.",
              ],
            },
            {
              type: "p",
              text: "You will explore these situations in the rules module.",
            },
            {
              type: "p",
              text: "**A ball touching the net does not automatically end the rally.** If it crosses and lands legally, play can continue.",
            },
            { type: "h", text: "Follow one example" },
            {
              type: "p",
              text: "Imagine you and your partner are serving:",
            },
            {
              type: "steps",
              items: [
                "**You serve** diagonally into the opposite service court.",
                "**Your opponent waits for the bounce**, then returns the ball.",
                "**You or your partner waits for the return to bounce**, then hits it back.",
                "**Your opponents volley** the next shot from outside the kitchen.",
                "**Your next shot lands out.** Your team has committed a fault, so the opponents win the rally.",
              ],
            },
            {
              type: "p",
              text: "Winning a rally and adding a point to the score are not always the same thing. The scoring module explains what happens next.",
            },
          ],
          takeaway:
            "**Serve → bounce → return → bounce → continue playing.** The two required bounces happen on opposite sides. They do not mean letting the ball bounce twice before hitting it.",
          practiceIntro:
            "With a partner across the net, practise the opening sequence at a comfortable pace:",
          practiceOrdered: true,
          practice: [
            "Serve diagonally.",
            "The receiver says **“one”** when the serve bounces, then returns it.",
            "The server says **“two”** when the return bounces, then hits it back.",
            "Continue the rally, allowing a bounce before each shot if that helps.",
          ],
          practiceNote:
            "Repeat five times. Focus on recognising the sequence rather than winning.",
          check: {
            prompt:
              "Your opponent has returned your serve. The ball is coming towards you but has not bounced. Can you volley it?",
            options: [
              { id: "kitchen", label: "Yes, if you are outside the kitchen." },
              { id: "bounce", label: "No, you must let the return bounce first." },
              { id: "baseline", label: "Yes, if your partner stays behind the baseline." },
            ],
            answerId: "bounce",
            explanation:
              "The serving side must let the return bounce. Standing outside the kitchen does not remove that requirement.",
          },
          checks: [
            {
              prompt:
                "Your opponent has returned your serve. The ball is coming towards you but has not bounced. Can you volley it?",
              options: [
                { id: "kitchen", label: "Yes, if you are outside the kitchen." },
                { id: "bounce", label: "No, you must let the return bounce first." },
                { id: "baseline", label: "Yes, if your partner stays behind the baseline." },
              ],
              answerId: "bounce",
              explanation:
                "The serving side must let the return bounce. Standing outside the kitchen does not remove that requirement.",
            },
            {
              prompt:
                "The serve has bounced on the receiving side, and the return has bounced on the serving side. Must every later shot bounce?",
              options: [
                { id: "always", label: "Yes, throughout the rally." },
                { id: "volley", label: "No, players may also volley when the kitchen rules allow it." },
              ],
              answerId: "volley",
              explanation:
                "After the two required bounces, players may hit after a bounce or volley legally.",
            },
            {
              prompt:
                "During a rally, your shot clips the net, crosses it, and lands inside the opponents' service court. What happens?",
              options: [
                { id: "continues", label: "Play continues." },
                { id: "lose", label: "You automatically lose the rally." },
                { id: "restart", label: "The rally must restart." },
              ],
              answerId: "continues",
              explanation: "Touching the net alone does not make the shot a fault.",
            },
          ],
          closing:
            "Every rally starts with a serve and two required bounces—one on each side. After that, players exchange legal shots until a fault ends play.",
        },
      ],
    },
    {
      number: 2,
      title: "Rules",
      summary: "The rules that decide a rally, including the kitchen and common faults.",
      lessons: [
        {
          slug: "key-rules",
          title: "Key rules to know",
          objective:
            "Explain where a serve must land, when volleying becomes possible, and how court lines affect whether a ball is in.",
          summary:
            "Serve diagonally beyond the kitchen into the correct service court. Let the serve and the return bounce, then play before a second bounce. A ball on a boundary line is in, except a serve that touches the kitchen line.",
          body: [
            {
              type: "p",
              text: "You have already followed a rally from start to finish. Now let's turn that sequence into a few rules you can use when playing.",
            },
            { type: "h", text: "1. Serve diagonally" },
            {
              type: "p",
              text: "Serve from behind the baseline into the diagonally opposite service court.",
            },
            {
              type: "p",
              text: "The serve must clear the kitchen, including its line. Landing on a sideline, centreline, or baseline of the correct service court is acceptable.",
            },
            {
              type: "p",
              text: "There are two serving methods: a **volley serve**, struck before the ball bounces, and a **drop serve**, struck after dropping the ball and letting it bounce. Each has its own requirements, covered in the serve lesson.",
            },
            {
              type: "figure",
              src: "/serve-in-or-out.jpg",
              alt: "Serve in or out. Seven landings: wrong service court is out, the baseline is in, the sideline is in, the centreline is in, the kitchen line is out, inside the kitchen is out, and beyond the baseline is out. A serve must land in the correct service court, beyond the kitchen line.",
              wide: true,
              width: 1024,
              height: 682,
            },
            { type: "h", text: "2. Allow the opening two bounces" },
            {
              type: "p",
              text: "The receiver must let the serve bounce. The serving side must then let the return bounce.",
            },
            {
              type: "p",
              text: "After those two bounces—one on each side—players may volley when the kitchen rules allow.",
            },
            { type: "h", text: "3. Return the ball before its second bounce" },
            {
              type: "p",
              text: "After the opening sequence, you may play the ball before or after its first bounce. Letting it bounce a second time on your side loses the rally.",
            },
            { type: "h", text: "4. Respect the kitchen" },
            {
              type: "p",
              text: "You cannot volley while touching the kitchen or its line. Your volleying momentum must not carry you into it either.",
            },
            {
              type: "p",
              text: "You may enter the kitchen to play a ball that has bounced. The next lesson explains this distinction.",
            },
            { type: "h", text: "5. Know which lines count" },
            {
              type: "p",
              text: "During a rally, a ball touching a boundary line is in.",
            },
            {
              type: "p",
              text: "**The serving exception:** a serve touching the kitchen line is a fault.",
            },
            { type: "h", text: "Put the rules together" },
            {
              type: "p",
              text: "Before each serve, ask yourself:",
            },
            {
              type: "bullets",
              items: [
                "Am I serving towards the correct service court?",
                "Am I ready to wait for the required bounce?",
                "Do I know where the kitchen begins?",
              ],
            },
            {
              type: "p",
              text: "As the rally develops, keep watching the ball and your position. These checks will become more natural with practice.",
            },
          ],
          takeaway:
            "**Serve diagonally. Allow both opening bounces. Respect the kitchen. Watch the lines.** You do not need to master every unusual situation before your first game. Start with these essentials and build your understanding through play.",
          practiceIntro: "With a partner, walk through the start of a rally:",
          practiceOrdered: true,
          practice: [
            "Point to the service court you are aiming for.",
            "Identify its kitchen line.",
            "Play the serve and return, calling the required bounces aloud.",
            "Continue with controlled shots.",
          ],
          practiceNote:
            "Afterwards, discuss one moment when you had to wait, move, or change your intended shot because of a rule.",
          check: {
            prompt: "When is the first volley allowed?",
            options: [
              { id: "immediately", label: "Immediately after the serve crosses the net." },
              {
                id: "after-bounces",
                label: "After the serve and return have each bounced, provided the kitchen rules allow it.",
              },
              { id: "everyone", label: "Only after every player has hit the ball." },
            ],
            answerId: "after-bounces",
            explanation:
              "Both sides must complete their required opening bounce before volleying becomes an option.",
          },
          checks: [
            {
              prompt: "When is the first volley allowed?",
              options: [
                { id: "immediately", label: "Immediately after the serve crosses the net." },
                {
                  id: "after-bounces",
                  label: "After the serve and return have each bounced, provided the kitchen rules allow it.",
                },
                { id: "everyone", label: "Only after every player has hit the ball." },
              ],
              answerId: "after-bounces",
              explanation:
                "Both sides must complete their required opening bounce before volleying becomes an option.",
            },
            {
              prompt:
                "A serve lands on the kitchen line of the diagonally opposite service court. Is it in?",
              options: [
                { id: "yes", label: "Yes—all lines count as in on a serve." },
                { id: "no", label: "No—the kitchen line is part of the kitchen." },
              ],
              answerId: "no",
              explanation:
                "A serve must land beyond the kitchen line. Touching that line makes it short.",
            },
            {
              prompt: "During a rally, your shot lands on the opponents' baseline. What is the call?",
              options: [
                { id: "in", label: "In." },
                { id: "out", label: "Out." },
              ],
              answerId: "in",
              explanation: "The baseline forms part of the court boundary. A ball touching it is in.",
            },
          ],
          closing:
            "These rules give you a foundation for legal play. Next, learn exactly what you can—and cannot—do around the kitchen.",
        },
        {
          slug: "understanding-the-kitchen",
          title: "Understanding the kitchen",
          objective:
            "Distinguish legal kitchen play from a kitchen fault, including line contact, momentum, and returning outside before a volley.",
          summary:
            "The kitchen is a non-volley zone, not a no-entry zone. You may play a ball after it bounces inside the kitchen. A volley is a fault if you are touching the kitchen, or if your momentum carries you in.",
          body: [
            {
              type: "p",
              text: "The kitchen often causes confusion because beginners hear “you can’t go in there.”",
            },
            {
              type: "p",
              text: "**You can.** What matters is how you play the ball and whether you are volleying.",
            },
            {
              type: "figure",
              src: "/kitchen-rules.jpg",
              alt: "Three kitchen situations. Playing a bounced ball inside the kitchen is legal. Volleying with a foot on the kitchen line is a fault. A volley whose momentum carries you into the kitchen is a fault. The kitchen is a non-volley zone, not a no-entry zone.",
              wide: true,
              width: 1024,
              height: 609,
            },
            { type: "h", text: "What is the kitchen?" },
            {
              type: "p",
              text: "The **kitchen**, officially called the **non-volley zone**, extends 7 feet (approximately 2.13 metres) from the net on each side.",
            },
            {
              type: "p",
              text: "The kitchen line belongs to the zone. A foot touching that line counts as touching the kitchen.",
            },
            { type: "h", text: "First, recognise a volley" },
            {
              type: "p",
              text: "A **volley** is a shot you hit before the ball bounces.",
            },
            {
              type: "p",
              text: "If you let the ball bounce before hitting it, that shot is not a volley—even if you make contact close to the net.",
            },
            {
              type: "p",
              text: "That distinction is the starting point for understanding the kitchen.",
            },
            { type: "h", text: "You may enter the kitchen" },
            {
              type: "p",
              text: "You may step into the kitchen, stand there, and hit a ball that has bounced.",
            },
            {
              type: "p",
              text: "You do **not** have to wait outside until the bounce happens. You can move in early to reach a short ball.",
            },
            {
              type: "p",
              text: "For example, an opponent sends a soft shot towards your kitchen. You step forward, let it bounce, and return it. Entering the kitchen does not make that shot a fault.",
            },
            { type: "h", text: "You cannot volley while touching it" },
            {
              type: "p",
              text: "You cannot volley while touching the kitchen or its line. This includes contact by something you are wearing or carrying.",
            },
            {
              type: "p",
              text: "Standing with one foot outside does not make a volley legal if your other foot is on the line.",
            },
            { type: "h", text: "Your momentum counts" },
            {
              type: "p",
              text: "Contacting the ball from outside is not enough if the volley carries you into the kitchen afterwards.",
            },
            {
              type: "p",
              text: "For example, you stretch forward to volley, then lose your balance and step onto the kitchen line. That is a fault—even if your shot has already ended the rally.",
            },
            {
              type: "p",
              text: "The same principle applies if your volleying momentum makes your paddle or another item you are carrying touch the kitchen.",
            },
            {
              type: "p",
              text: "**Practical cue:** Choose a volley you can play while staying balanced.",
            },
            { type: "h", text: "Get both feet back outside before volleying" },
            {
              type: "p",
              text: "After touching the kitchen, you must establish **both feet on the playing surface completely outside it** before your next volley.",
            },
            {
              type: "p",
              text: "Jumping from inside the kitchen and hitting the ball while airborne does not satisfy this requirement.",
            },
            {
              type: "p",
              text: "After playing a bounced ball inside the kitchen, practise moving back outside and finding your balance. That prepares you for a possible volley on the next shot.",
            },
            { type: "h", text: "Compare these situations" },
            {
              type: "table",
              headers: ["Situation", "Decision"],
              rows: [
                ["You enter the kitchen, let the ball bounce, then return it.", "Legal"],
                [
                  "You stand in the kitchen while your partner plays the ball.",
                  "Legal, provided you are not involved in a volleying fault",
                ],
                ["You volley with a foot touching the kitchen line.", "Fault"],
                [
                  "You volley from outside, but your momentum carries you into the kitchen.",
                  "Fault",
                ],
                [
                  "You leave the kitchen, establish both feet outside, then volley without touching it.",
                  "Legal, once the opening two-bounce requirement is complete",
                ],
              ],
            },
          ],
          takeaway:
            "**You may enter the kitchen. You may play a bounced ball there. Before volleying, establish both feet outside—and keep your volleying momentum out.**",
          practiceIntro: "With a partner, practise this sequence slowly:",
          practiceOrdered: true,
          practice: [
            "Start just behind your kitchen line.",
            "Have your partner send a soft ball into your kitchen.",
            "Step in, let it bounce, and return it.",
            "Move back until both feet are completely outside the kitchen.",
            "Find your balance before the next ball.",
          ],
          practiceNote:
            "Begin with bounced shots only. Once comfortable, ask your partner to alternate soft, short balls with gentle balls you can volley from outside.",
          check: {
            prompt: "A ball is dropping into your kitchen. May you step in before it bounces?",
            options: [
              { id: "yes", label: "Yes, provided you let it bounce before hitting it." },
              { id: "no", label: "No, entering before the bounce is always a fault." },
              { id: "partner", label: "Only if your partner stays behind the baseline." },
            ],
            answerId: "yes",
            explanation: "Entering the kitchen is allowed. The restriction is on volleying while touching it.",
          },
          checks: [
            {
              prompt: "A ball is dropping into your kitchen. May you step in before it bounces?",
              options: [
                { id: "yes", label: "Yes, provided you let it bounce before hitting it." },
                { id: "no", label: "No, entering before the bounce is always a fault." },
                { id: "partner", label: "Only if your partner stays behind the baseline." },
              ],
              answerId: "yes",
              explanation:
                "Entering the kitchen is allowed. The restriction is on volleying while touching it.",
            },
            {
              prompt:
                "You volley from outside the kitchen, then your momentum carries your foot onto the line. Your shot has already won the rally. What is the decision?",
              options: [
                { id: "counts", label: "Your winning shot counts." },
                { id: "fault", label: "It is a kitchen fault." },
              ],
              answerId: "fault",
              explanation: "Volleying momentum still counts, even after the ball is no longer in play.",
            },
            {
              prompt:
                "You have just played a bounced ball inside the kitchen. What must happen before you volley another ball?",
              options: [
                { id: "step", label: "You must take one step backwards." },
                {
                  id: "feet",
                  label:
                    "Both feet must establish contact with the playing surface completely outside the kitchen.",
                },
                { id: "partner", label: "Your partner must hit the next shot." },
              ],
              answerId: "feet",
              explanation:
                "One step is not necessarily enough. Both feet must be established completely outside before you volley.",
            },
          ],
          closing:
            "The kitchen is a non-volley zone, not a no-entry zone. Recognise whether the ball has bounced, know where your feet are, and stay in control of your movement.",
        },
        {
          slug: "faults-and-common-situations",
          title: "Faults and common situations",
          objective:
            "Recognise common faults, distinguish them from situations where play continues, and know when to replay a rally.",
          summary:
            "A fault ends the rally. A ball that clips the net and lands legally stays in play. If you cannot clearly see a ball out, call it in. A stray ball that interrupts play is a hinder: stop and replay.",
          body: [
            {
              type: "p",
              text: "Not every unusual bounce or net contact means play should stop. Learning to recognise the difference helps games run smoothly and keeps decisions fair.",
            },
            {
              type: "figure",
              src: "/play-on-or-replay.jpg",
              alt: "Three decisions. A ball that clips the net and lands legally means play on. If you cannot clearly see a ball out, call it in. A stray ball means stop, clear it, and replay. Legal ball: play on. Doubt: in. Outside interference: stop and replay.",
              wide: true,
              width: 1024,
              height: 683,
            },
            { type: "h", text: "What is a fault?" },
            {
              type: "p",
              text: "A **fault** is a rule violation that ends the rally. The side committing it loses that rally.",
            },
            {
              type: "p",
              text: "What happens to the score or the serve comes next—we will cover that in the scoring module.",
            },
            { type: "h", text: "Recognise the common faults" },
            {
              type: "p",
              text: "You have already met several of these. Use this checklist when deciding why play stopped:",
            },
            {
              type: "table",
              headers: ["Situation", "Why the rally ends"],
              rows: [
                ["A shot lands outside the required court area.", "The ball is out."],
                ["A shot hits the net and fails to cross.", "The ball has not been returned legally."],
                ["The ball bounces twice before being returned.", "The return was too late."],
                ["A player volleys the serve or its return.", "A required opening bounce was skipped."],
                [
                  "A player commits a kitchen violation while volleying.",
                  "The non-volley-zone rule was broken.",
                ],
                [
                  "The ball hits a player's body or clothing.",
                  "The ball was not returned with the paddle.",
                ],
                [
                  "A player, their paddle, or something they wear touches the net during live play.",
                  "Player contact with the net is a fault.",
                ],
              ],
            },
            {
              type: "p",
              text: "For ordinary paddle contact, the hand holding the paddle below the wrist counts as part of the paddle. This is different from the ball hitting your arm or body.",
            },
            { type: "h", text: "The ball clips the net" },
            {
              type: "p",
              text: "**Keep playing if the ball crosses and lands legally.**",
            },
            {
              type: "p",
              text: "This also applies to a serve: touching the net does not automatically mean a replay. The serve must still land in the correct service court beyond the kitchen line.",
            },
            {
              type: "p",
              text: "If it clips the net and drops into the kitchen, it is a service fault.",
            },
            {
              type: "p",
              text: "**Remember the distinction:** the ball may touch the net and remain in play; a player or their equipment may not touch it during live play.",
            },
            { type: "h", text: "The ball lands on a line" },
            {
              type: "p",
              text: "During a rally, a ball touching a boundary line is in.",
            },
            {
              type: "p",
              text: "On a serve, remember the exception: **the kitchen line is a fault**. The other lines bordering the correct service court count as in.",
            },
            {
              type: "p",
              text: "A ball that lands in and then travels out is still a legal landing. Judge where it first touched the court, not where it rolled afterwards.",
            },
            { type: "h", text: "You are unsure whether the ball was out" },
            {
              type: "p",
              text: "Call a ball out only when you clearly see that it landed outside.",
            },
            {
              type: "p",
              text: "If you cannot tell, give your opponents the benefit of the doubt: **the ball is in**. Do not ask for a replay simply because nobody had a clear view.",
            },
            {
              type: "p",
              text: "In games without officials, make line calls on your own side promptly. If you realise you made an incorrect out call, acknowledge it.",
            },
            { type: "h", text: "A stray ball enters the court" },
            {
              type: "p",
              text: "If a ball from another court enters your playing area and interrupts play, call **“Ball!”** and stop.",
            },
            {
              type: "p",
              text: "Remove the hazard before restarting. This type of outside interference is called a **hinder** and results in a replay.",
            },
            {
              type: "p",
              text: "A replay restarts the rally without awarding a point or changing the server.",
            },
            { type: "h", text: "Compare the decisions" },
            {
              type: "table",
              headers: ["What happened?", "What should you do?"],
              rows: [
                ["Your serve clips the net and lands legally.", "Play on."],
                ["You cannot tell whether an opponent's shot landed out.", "Treat it as in."],
                [
                  "A stray ball rolls through the playing area during the rally.",
                  "Stop play and replay after clearing it.",
                ],
                ["Your paddle touches the net while the ball is live.", "Acknowledge the fault."],
              ],
            },
          ],
          takeaway:
            "**Fault: the rally ends. Legal net contact: play continues. Uncertain line call: give the benefit of the doubt. Outside interference: stop and resolve it safely.**",
          practiceIntro: "Play a few gentle rallies with a partner.",
          practice: [
            "After each rally, describe what happened in one short phrase: **“landed out,” “second bounce,” “into the net,”** or **“kitchen fault.”**",
            "If a shot clips the net but crosses legally, continue. Practise recognising the situation without stopping unnecessarily.",
            "Discuss unclear situations between rallies rather than trying to debate while the ball is moving.",
          ],
          check: {
            prompt:
              "Your serve clips the net and lands in the correct service court, beyond the kitchen line. What happens?",
            options: [
              { id: "replay", label: "Replay the serve." },
              { id: "play", label: "Play continues." },
              { id: "lose", label: "The server loses the rally." },
            ],
            answerId: "play",
            explanation:
              "Net contact alone does not make a serve a fault. The landing is legal, so the receiver should play it.",
          },
          checks: [
            {
              prompt:
                "Your serve clips the net and lands in the correct service court, beyond the kitchen line. What happens?",
              options: [
                { id: "replay", label: "Replay the serve." },
                { id: "play", label: "Play continues." },
                { id: "lose", label: "The server loses the rally." },
              ],
              answerId: "play",
              explanation:
                "Net contact alone does not make a serve a fault. The landing is legal, so the receiver should play it.",
            },
            {
              prompt:
                "Your opponent's shot lands close to the baseline. Neither you nor your partner clearly sees it out. What is the correct decision?",
              options: [
                { id: "in", label: "Treat the ball as in." },
                { id: "replay", label: "Replay the rally." },
                { id: "out", label: "Call it out because it was close." },
              ],
              answerId: "in",
              explanation: "Uncertainty goes in your opponents' favour. A missed view does not justify a replay.",
            },
            {
              prompt: "A stray ball rolls across your court during a rally. What should you do?",
              options: [
                { id: "play", label: "Keep playing and avoid it." },
                { id: "replay", label: "Stop play, clear the ball, and replay the rally." },
                { id: "award", label: "Award the rally to the serving team." },
              ],
              answerId: "replay",
              explanation:
                "Outside interference can create a hazard. Stop, remove it, and restart the rally.",
            },
          ],
          closing:
            "Recognise why play stopped before deciding what happens next. Make clear, honest calls, keep legal balls in play, and distinguish faults from genuine interruptions.",
        },
      ],
    },
    {
      number: 3,
      title: "Scoring",
      summary: "How points are won, how to call the score, and who serves from where.",
      lessons: [
        {
          slug: "how-scoring-works",
          title: "How scoring works",
          objective:
            "Explain who can score a point, what happens when the serving team loses a rally, and what is needed to win a game.",
          summary:
            "In traditional side-out scoring, only the serving team can score. A receiving win changes the server and does not add a point. Games are usually to 11, and you must win by two.",
          body: [
            {
              type: "p",
              text: "Winning a rally and scoring a point are not always the same thing.",
            },
            {
              type: "p",
              text: "This course teaches **traditional side-out scoring**. You may also encounter rally scoring, where a point is awarded after every rally. Before playing, confirm which system your group uses.",
            },
            {
              type: "figure",
              src: "/how-scoring-works.jpg",
              alt: "Traditional side-out scoring. When the serving team wins, the score goes from 4–3 to 5–3 and the same player serves again. When the receiving team wins, the score stays 4–3 and the serve changes. Games are usually to 11, win by 2. Only the serving team can score a point.",
              wide: true,
              width: 1024,
              height: 624,
            },
            { type: "h", text: "Only the serving team can score" },
            { type: "p", text: "In traditional scoring:" },
            {
              type: "bullets",
              items: [
                "**Win a rally while serving:** your team scores one point.",
                "**Win a rally while receiving:** your team does not score a point, but the current server loses their serve.",
              ],
            },
            {
              type: "p",
              text: "Receiving successfully still matters: it prevents your opponents from scoring and brings your team closer to its next opportunity to serve.",
            },
            { type: "h", text: "What happens after each rally?" },
            {
              type: "table",
              headers: ["Who wins the rally?", "Does the score change?", "What happens to the serve?"],
              rows: [
                ["The serving team", "Yes—one point for the serving team.", "The same player serves again."],
                ["The receiving team", "No.", "The serve moves to the next eligible server."],
              ],
            },
            {
              type: "p",
              text: "After scoring, the server and their partner exchange left and right positions on their own half. They do not cross the net or change ends.",
            },
            {
              type: "p",
              text: "The receiving team does not exchange positions simply because its opponents scored.",
            },
            { type: "h", text: "When the serving team loses" },
            {
              type: "p",
              text: "In doubles, both partners normally get a turn serving during their team’s service rotation.",
            },
            {
              type: "bullets",
              items: [
                "When the **first server** loses a rally, their partner serves next.",
                "When the **second server** loses a rally, the opponents receive the serve.",
              ],
            },
            {
              type: "p",
              text: "The transfer of service to the opposing team is called a **side-out**.",
            },
            {
              type: "p",
              text: "There is one opening exception: the team that serves first in a game gets only one server in its first service rotation. Losing that rally produces a side-out.",
            },
            {
              type: "p",
              text: "You will work through serving order and positions in “Who serves next—and from where?” For now, remember: **losing a rally while serving does not give your opponents a point.**",
            },
            { type: "h", text: "Follow a short example" },
            {
              type: "p",
              text: "Your team has **4 points**. Your opponents have **3**. You are your team’s first server during a normal service rotation.",
            },
            {
              type: "steps",
              items: [
                "**Your team wins the rally.** Your score becomes 5–3. You exchange positions with your partner and serve again.",
                "**Your team loses the next rally.** The score stays 5–3. Your partner takes over serving.",
                "**Your team loses again.** The score still stays 5–3. It is now a side-out, and the opponents serve.",
              ],
            },
            {
              type: "p",
              text: "The score changed only when your team won while serving.",
            },
            { type: "h", text: "Games are usually to 11—win by two" },
            {
              type: "p",
              text: "A standard game is usually played to **11 points**, with a **two-point winning margin**.",
            },
            {
              type: "table",
              headers: ["Score", "Is the game over?"],
              rows: [
                ["11–8", "Yes—the leading team has at least 11 and leads by two or more."],
                ["11–10", "No—the lead is only one."],
                ["12–10", "Yes—the lead is two."],
                ["12–11", "No—play continues."],
              ],
            },
            {
              type: "p",
              text: "Reaching 11 is not enough if the other team has 10.",
            },
          ],
          takeaway:
            "**Serving win = a point. Receiving win = no point. A side-out transfers the serve, not a point.**",
          practiceIntro:
            "Play a short practice game to 5, win by two, using traditional scoring. After every rally, pause and say:",
          practiceOrdered: true,
          practice: [
            "Who won the rally?",
            "Was that team serving?",
            "Does the score change?",
            "Who serves next?",
          ],
          practiceNote:
            "Keep the pace relaxed. The aim is to connect the result of each rally with what happens afterwards.",
          check: {
            prompt: "You are receiving and your team wins the rally. What happens to the score?",
            options: [
              { id: "point", label: "Your team adds one point." },
              { id: "same", label: "The score stays the same." },
              { id: "lose", label: "Your opponents lose one point." },
            ],
            answerId: "same",
            explanation:
              "Only the serving team can score in traditional side-out scoring. The current server loses their serve, but service does not necessarily transfer to your team immediately.",
          },
          checks: [
            {
              prompt: "You are receiving and your team wins the rally. What happens to the score?",
              options: [
                { id: "point", label: "Your team adds one point." },
                { id: "same", label: "The score stays the same." },
                { id: "lose", label: "Your opponents lose one point." },
              ],
              answerId: "same",
              explanation:
                "Only the serving team can score in traditional side-out scoring. The current server loses their serve, but service does not necessarily transfer to your team immediately.",
            },
            {
              prompt: "Your team wins a rally while serving. Who serves next?",
              options: [
                { id: "same", label: "The same player, from the other service position." },
                { id: "partner", label: "Their partner." },
                { id: "opponents", label: "The opposing team." },
              ],
              answerId: "same",
              explanation:
                "The serving team scores one point. The partners exchange left and right positions, and the same server continues.",
            },
            {
              prompt: "In a game to 11, your team leads 11–10. Have you won?",
              options: [
                { id: "yes", label: "Yes—you reached 11 first." },
                { id: "no", label: "No—you need a two-point lead." },
              ],
              answerId: "no",
              explanation: "Play continues. Your team would win at 12–10, but not at 12–11.",
            },
          ],
          closing:
            "In traditional scoring, only the serving team scores. Losing while serving changes the server; it does not award an opponent a point. Games are usually to 11, win by two.",
        },
        {
          slug: "calling-the-score",
          title: "Calling the score",
          objective:
            "Call the three numbers in the correct order and explain what each number means in traditional doubles scoring.",
          summary:
            "Before each serve, call the serving team’s score, the receiving team’s score, and the server number. A traditional doubles game starts at 0–0–2, and the order follows whichever team is serving.",
          body: [
            {
              type: "p",
              text: "Before serving, announce the score clearly enough for all players to hear.",
            },
            {
              type: "p",
              text: "In traditional doubles scoring, the call contains **three numbers**:",
            },
            {
              type: "p",
              text: "**Serving team’s score → receiving team’s score → server number**",
            },
            {
              type: "figure",
              src: "/calling-the-score.jpg",
              alt: "Traditional doubles scoring. A call of 4–3–2 means the serving team has 4, the receiving team has 3, and this is the second server. The opening call is 0–0–2 because only one server serves in the opening rotation. After a side-out, 4–3–2 becomes 3–4–1: the scores stay the same and the new serving team’s score comes first.",
              wide: true,
              width: 1024,
              height: 624,
            },
            { type: "h", text: "What do the numbers mean?" },
            {
              type: "p",
              text: "Imagine your team has 4 points, your opponents have 3, and you are the second server in your team’s current service rotation.",
            },
            { type: "p", text: "You call:" },
            { type: "h", text: "“Four–three–two”" },
            {
              type: "table",
              headers: ["Number", "Meaning"],
              rows: [
                ["**4**", "Your team’s score—the serving team."],
                ["**3**", "Your opponents’ score—the receiving team."],
                ["**2**", "You are the second server in this service rotation."],
              ],
            },
            {
              type: "p",
              text: "The third number is not an extra point or the number of serves you have left. It identifies the current server’s place in the service rotation.",
            },
            { type: "h", text: "Server numbers are temporary" },
            {
              type: "p",
              text: "You and your partner are not permanently “player 1” and “player 2.”",
            },
            {
              type: "p",
              text: "After a side-out, the player correctly positioned on the right serves first for that rotation. Their partner serves second.",
            },
            {
              type: "p",
              text: "The next lesson explains how to identify the correct player and position.",
            },
            { type: "p", text: "For now, remember:" },
            {
              type: "bullets",
              items: [
                "**Server 1 loses a rally:** their partner normally becomes server 2.",
                "**Server 2 loses a rally:** service passes to the opponents.",
              ],
            },
            {
              type: "p",
              text: "Scoring a point does not change your server number. You remain the same server while your team continues winning rallies.",
            },
            { type: "h", text: "Why does the game start at 0–0–2?" },
            {
              type: "p",
              text: "At the beginning of a game, both teams have zero points.",
            },
            {
              type: "p",
              text: "The opening serving team gets only one server in its first service rotation. The opening server therefore calls:",
            },
            { type: "h", text: "“Zero–zero–two”" },
            {
              type: "p",
              text: "The **2** signals that a lost rally will produce a side-out. The partner does not receive a serving turn during that opening rotation.",
            },
            {
              type: "p",
              text: "Once the opponents receive the serve, their rotation begins with server 1.",
            },
            { type: "h", text: "The serving team’s score always comes first" },
            {
              type: "p",
              text: "The numbers follow the server’s perspective, rather than staying in a fixed team order.",
            },
            { type: "p", text: "Suppose your team leads 5–3:" },
            {
              type: "bullets",
              items: [
                "While your second server is serving, the call is **“Five–three–two.”**",
                "Your team loses the rally, producing a side-out.",
                "The opponents now serve and call **“Three–five–one.”**",
              ],
            },
            {
              type: "p",
              text: "Neither team’s score changed. The order reversed because the other team became the serving team.",
            },
            { type: "h", text: "Follow the calls" },
            { type: "p", text: "Your team is beginning the game:" },
            {
              type: "table",
              headers: ["What happens?", "Next score call"],
              rows: [
                ["You prepare to serve the opening rally.", "**0–0–2**"],
                ["Your team wins the rally.", "**1–0–2**"],
                ["Your team wins again.", "**2–0–2**"],
                ["Your team loses. The opponents take over serving.", "**0–2–1**"],
              ],
            },
            {
              type: "p",
              text: "Notice that your third number stayed **2** while you scored. It changed only when service transferred to a new server.",
            },
            { type: "h", text: "Call first, serve second" },
            { type: "p", text: "Before each serve:" },
            {
              type: "steps",
              items: [
                "Check the score and your server number.",
                "Make sure the receiver is ready.",
                "Announce all three numbers clearly.",
                "Finish the call before beginning your serve.",
              ],
            },
            {
              type: "p",
              text: "If someone questions the score, resolve it before serving. A brief check is easier than reconstructing several rallies afterwards.",
            },
          ],
          takeaway:
            "**Our score. Their score. Server number.** That is the order when you are serving.",
          practiceIntro:
            "With three other players, rehearse these situations without hitting a ball:",
          practiceOrdered: true,
          practice: [
            "Start a game and call **0–0–2**.",
            "Pretend the serving team wins two rallies, announcing the updated score each time.",
            "Pretend it loses the next rally and transfer the ball to the opponents.",
            "Ask the new server to announce the score from their perspective.",
          ],
          practiceNote: "Then practise the same sequence with serves and returns.",
          check: {
            prompt: "You are serving the first rally of a traditional doubles game. What do you call?",
            options: [
              { id: "one", label: "Zero–zero–one." },
              { id: "two", label: "Zero–zero–two." },
              { id: "open", label: "One–zero–two." },
            ],
            answerId: "two",
            explanation:
              "The opening team gets only one server in its first rotation. Calling “two” signals that its next lost rally will produce a side-out.",
          },
          checks: [
            {
              prompt: "You are serving the first rally of a traditional doubles game. What do you call?",
              options: [
                { id: "one", label: "Zero–zero–one." },
                { id: "two", label: "Zero–zero–two." },
                { id: "open", label: "One–zero–two." },
              ],
              answerId: "two",
              explanation:
                "The opening team gets only one server in its first rotation. Calling “two” signals that its next lost rally will produce a side-out.",
            },
            {
              prompt:
                "Your team has 6 points, the opponents have 4, and you are the first server in this rotation. What do you call?",
              options: [
                { id: "order", label: "Six–four–one." },
                { id: "reversed", label: "Four–six–one." },
                { id: "second", label: "Six–four–two." },
              ],
              answerId: "order",
              explanation: "Serving score first, receiving score second, server number third.",
            },
            {
              prompt: "You call 6–4–1, then your team wins the rally. What is your next call?",
              options: [
                { id: "number", label: "Six–four–two." },
                { id: "point", label: "Seven–four–one." },
                { id: "flip", label: "Four–seven–one." },
              ],
              answerId: "point",
              explanation:
                "Your team adds a point. You remain server 1 and serve again from the other service position.",
            },
            {
              prompt:
                "Your team leads 7–4 when your second server loses the rally. What does the opponents’ first server call next?",
              options: [
                { id: "same", label: "Seven–four–one." },
                { id: "two", label: "Four–seven–two." },
                { id: "sideout", label: "Four–seven–one." },
              ],
              answerId: "sideout",
              explanation:
                "The opponents are now serving, so their score comes first. Their new service rotation begins with server 1.",
            },
          ],
          closing:
            "Call the serving score, receiving score, and server number—in that order. Start at 0–0–2, and remember that the score order follows whichever team is serving.",
        },
        {
          slug: "who-serves-next",
          title: "Who serves next—and from where?",
          objective:
            "Identify the next server and their correct service position after a point, a server change, or a side-out.",
          summary:
            "In traditional doubles, a point keeps the same server and switches positions. A first-server loss hands the serve to the partner without a position change. A second-server loss is a side-out, and the new serving team starts from the right.",
          body: [
            {
              type: "p",
              text: "You know how to call the score. Now connect those numbers to the players on court.",
            },
            {
              type: "p",
              text: "This lesson covers **traditional doubles scoring**, using standard positioning without stacking.",
            },
            {
              type: "p",
              text: "**Right and left always mean your right and left while facing the net.**",
            },
            {
              type: "figure",
              src: "/who-serves-next.jpg",
              alt: "Traditional doubles, viewed facing the net. Alex serves from the right at 4–2–1, with Sam on the left. When the team scores, the call becomes 5–2–1, Alex and Sam exchange positions, and Alex serves again from the left. When the team loses the rally, the score stays 5–2, the call becomes 5–2–2, positions stay the same, and Sam serves from the right.",
              wide: true,
              width: 1024,
              height: 624,
            },
            { type: "h", text: "Three situations to recognise" },
            { type: "h", level: 3, text: "1. Your team scores: same server, opposite side" },
            { type: "p", text: "When your team wins a rally while serving:" },
            {
              type: "bullets",
              items: [
                "Add one point.",
                "Exchange left and right positions with your partner.",
                "The same player serves again.",
              ],
            },
            {
              type: "p",
              text: "You change positions within your own half of the court—not ends across the net.",
            },
            { type: "h", level: 3, text: "2. First server loses: partner takes over" },
            {
              type: "p",
              text: "When the first server loses a rally, the score stays unchanged. Their partner becomes the second server and serves from their existing left or right position.",
            },
            {
              type: "p",
              text: "Do not exchange positions because of the loss. A server change does not itself move either partner.",
            },
            { type: "h", level: 3, text: "3. Second server loses: side-out" },
            {
              type: "p",
              text: "When the second server loses a rally, service transfers to the opponents.",
            },
            {
              type: "p",
              text: "The player correctly positioned on the **right** of the new serving team begins that rotation as server 1—even when the team’s score is odd.",
            },
            {
              type: "p",
              text: "**Opening exception:** the game begins at 0–0–2. The opening serving team gets only one server before its first side-out.",
            },
            { type: "h", text: "Use your starting positions to check" },
            {
              type: "p",
              text: "At the beginning of the game, remember which partner starts on the right. Call that person your team’s **starting player** for this explanation.",
            },
            { type: "p", text: "Their position follows your team’s score:" },
            {
              type: "table",
              headers: ["Your team’s score", "Starting player’s position", "Partner’s position"],
              rows: [
                ["Even: 0, 2, 4, 6…", "Right", "Left"],
                ["Odd: 1, 3, 5, 7…", "Left", "Right"],
              ],
            },
            {
              type: "p",
              text: "This tracks **positions**, not permanent server numbers.",
            },
            {
              type: "p",
              text: "For example, when your team receives the serve at an odd score, your starting player belongs on the left. Their partner is on the right and therefore begins that service rotation as server 1.",
            },
            {
              type: "p",
              text: "**Both partners can serve from either side during a game.**",
            },
            { type: "h", text: "Who receives?" },
            {
              type: "p",
              text: "The player diagonally opposite the server is the receiver.",
            },
            {
              type: "p",
              text: "The receiving partners keep their assigned left and right positions while their opponents are serving. As the server changes sides after scoring, the serve goes to the other receiver.",
            },
            {
              type: "p",
              text: "Where you move during a rally is separate from your assigned position for the next serve.",
            },
            { type: "h", text: "Walk through a service rotation" },
            {
              type: "p",
              text: "Your team has just received the serve at **4–2**. Alex is correctly positioned on the right, and Sam is on the left.",
            },
            {
              type: "table",
              headers: ["Event", "Next server and position", "Next call"],
              rows: [
                ["Your service rotation begins.", "Alex serves from the right.", "**4–2–1**"],
                [
                  "Your team scores.",
                  "Alex moves to the left; Sam moves right. Alex serves again.",
                  "**5–2–1**",
                ],
                [
                  "Your team loses.",
                  "Sam takes over from the right. Neither partner exchanges positions.",
                  "**5–2–2**",
                ],
                [
                  "Your team scores.",
                  "Sam moves left and serves again; Alex moves right.",
                  "**6–2–2**",
                ],
                [
                  "Your team loses.",
                  "Side-out. The opponents’ correctly positioned right-side player serves.",
                  "**2–6–1**",
                ],
              ],
            },
            {
              type: "p",
              text: "Notice that Sam served from the right at an odd score and the left at an even score. That is why “even = right” is not a rule for every doubles server.",
            },
          ],
          takeaway:
            "**Point: same server, change positions.**\n**First-server loss: partner serves, keep positions.**\n**Second-server loss: side-out, opponents start from the right.**",
          practiceIntro: "With four players, rehearse the example above without hitting a ball.",
          practiceOrdered: true,
          practice: [
            "Give the serving team the names Alex and Sam.",
            "Begin with Alex right and Sam left at 4–2–1.",
            "Work through each row, passing the ball to the next server.",
            "Before every imaginary serve, identify the diagonal receiver.",
          ],
          practiceNote:
            "Then restart with different names and a different score. Agree on the starting positions before beginning.",
          check: {
            prompt: "Alex serves from the right at 4–2–1. Alex’s team wins the rally. What happens?",
            options: [
              { id: "left", label: "Alex serves from the left at 5–2–1." },
              { id: "sam", label: "Sam serves next at 5–2–2." },
              { id: "opponents", label: "The opponents receive the serve." },
            ],
            answerId: "left",
            explanation: "The team scores, the partners exchange positions, and Alex continues serving.",
          },
          checks: [
            {
              prompt: "Alex serves from the right at 4–2–1. Alex’s team wins the rally. What happens?",
              options: [
                { id: "left", label: "Alex serves from the left at 5–2–1." },
                { id: "sam", label: "Sam serves next at 5–2–2." },
                { id: "opponents", label: "The opponents receive the serve." },
              ],
              answerId: "left",
              explanation: "The team scores, the partners exchange positions, and Alex continues serving.",
            },
            {
              prompt: "Alex then loses the rally at 5–2–1. Sam is on the right. What happens?",
              options: [
                { id: "odd", label: "Sam moves left because the score is odd." },
                { id: "right", label: "Sam serves from the right at 5–2–2." },
                { id: "again", label: "Alex serves again from the right." },
              ],
              answerId: "right",
              explanation:
                "The score does not change, so neither partner exchanges positions. Sam takes over from the right.",
            },
            {
              prompt:
                "Your team receives the serve after a side-out. Your score is 3. Which position begins the rotation?",
              options: [
                { id: "left", label: "Left, because 3 is odd." },
                { id: "right", label: "Right, with the player correctly assigned to that position." },
              ],
              answerId: "right",
              explanation:
                "A new doubles service rotation begins from the right. The score helps identify which partner belongs there.",
            },
          ],
          closing:
            "Track the score, the service rotation, and each partner’s position together. In doubles, an odd score does not automatically mean the next serve comes from the left.",
        },
      ],
    },
    {
      number: 4,
      title: "Essential shots",
      summary: "The serve, return, drive, dink, and volley, plus a first look at the drop, lob, and overhead.",
      lessons: [
        {
          slug: "the-serve",
          title: "The serve",
          objective:
            "Use a legal serving method to land the ball consistently in the diagonally opposite service court, with a comfortable margin from the lines.",
          summary:
            "A beginner serve should be legal and repeatable, aimed into a generous diagonal target. The volley serve is struck before the bounce; the drop serve is struck after a natural bounce. After serving, let the return bounce.",
          body: [
            {
              type: "p",
              text: "The serve starts every rally. Your first priority is to put the ball in play reliably.",
            },
            {
              type: "p",
              text: "You do not need to serve an outright winner. A controlled serve gives you the opportunity to play the next shot.",
            },
            {
              type: "figure",
              src: "/the-serve.jpg",
              alt: "Volley serve and drop serve. A volley serve is an upward swing hit before the bounce, with contact no higher than the waist and the paddle head no higher than the wrist. A drop serve is released so it falls naturally, bounces, then is hit. For both, keep your feet behind the baseline, serve diagonally beyond the kitchen line, and aim into an area rather than at a line.",
              wide: true,
              width: 1024,
              height: 624,
            },
            { type: "h", text: "Know your target" },
            {
              type: "p",
              text: "Serve diagonally into the opposite service court, beyond the kitchen line.",
            },
            {
              type: "p",
              text: "For practice, choose a generous target in the deeper half of that service court. Leave space between your target and the baseline, sideline, and centreline.",
            },
            { type: "p", text: "**Aim into an area—not at a line.**" },
            {
              type: "p",
              text: "Depth can make the return more demanding, but a serve that lands safely in is more useful than a deeper serve that repeatedly goes out.",
            },
            { type: "h", text: "Choose your serving method" },
            { type: "h", level: 3, text: "The volley serve" },
            {
              type: "p",
              text: "For a volley serve, release the ball and strike it before it bounces.",
            },
            { type: "p", text: "At contact:" },
            {
              type: "bullets",
              items: [
                "Your arm must be moving in a clear upward arc.",
                "The ball must be no higher than your waist.",
                "The highest point of the paddle head must not be above the highest part of your wrist joint.",
              ],
            },
            {
              type: "p",
              text: "Use a smooth low-to-high action rather than trying to force extra speed.",
            },
            { type: "h", level: 3, text: "The drop serve" },
            {
              type: "p",
              text: "For a drop serve, release the ball, let it bounce, then strike it.",
            },
            {
              type: "p",
              text: "Let the ball fall naturally. Do not throw it upwards or push it down to create a higher bounce.",
            },
            {
              type: "p",
              text: "The volley serve’s three contact requirements do not apply to this method. The foot-position and landing requirements still do.",
            },
            {
              type: "p",
              text: "For either method, do not deliberately add spin with your hand during the release. Spin generated by the paddle striking the ball is different.",
            },
            {
              type: "p",
              text: "**Choose the method you can repeat comfortably.** You can develop the other one later.",
            },
            { type: "h", text: "Set up behind the baseline" },
            {
              type: "p",
              text: "At contact, at least one foot must be grounded in the correct serving area behind the baseline. Neither foot may touch the baseline, the court, or the ground outside the imaginary extensions of the sideline and centreline.",
            },
            {
              type: "p",
              text: "A straightforward beginner setup is to keep both feet comfortably behind the baseline and within those imaginary side boundaries.",
            },
            {
              type: "p",
              text: "Leave enough room to swing without accidentally stepping onto the line.",
            },
            { type: "h", text: "Build a simple, repeatable action" },
            { type: "p", text: "These are useful starting cues:" },
            {
              type: "steps",
              items: [
                "**Settle your stance.** Find a balanced position facing towards your diagonal target.",
                "**Keep the release predictable.** Place the ball where you can meet it comfortably.",
                "**Swing smoothly.** Use a controlled movement rather than a sudden wrist flick.",
                "**Finish towards the target.** Let the paddle follow through naturally.",
                "**Recover your balance.** Prepare for the return instead of watching your serve.",
              ],
            },
            {
              type: "p",
              text: "For a drop serve, avoid chasing an awkward bounce. Practise a release that gives you a comfortable contact point.",
            },
            { type: "h", text: "Stay ready for the return" },
            {
              type: "p",
              text: "After serving, remember the two-bounce rule: your team must let the return bounce.",
            },
            {
              type: "p",
              text: "Avoid rushing towards the kitchen immediately. Stay far enough back to handle a deep return, then move according to the ball you receive.",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "Serves repeatedly hit the net.",
                  "Use a smoother upward action and allow more height over the net.",
                ],
                [
                  "Serves repeatedly go long.",
                  "Reduce pace and bring your target farther inside the baseline.",
                ],
                [
                  "Serves miss wide.",
                  "Choose a target farther from the sideline and simplify your swing.",
                ],
                [
                  "Contact feels inconsistent.",
                  "Practise the release and contact at a slower pace.",
                ],
                ["You step onto the baseline.", "Begin a little farther behind it."],
              ],
            },
            {
              type: "p",
              text: "Change one thing at a time. A predictable action makes it easier to understand why a serve missed.",
            },
          ],
          takeaway:
            "**Legal setup. Comfortable contact. Generous target. Balanced finish.**\nConsistency comes before extra pace or spin.",
          practiceIntro:
            "Mark a large target in the deeper half of the diagonal service court, leaving a comfortable margin from the boundaries.",
          practiceOrdered: true,
          practice: [
            "Serve ten balls from the right.",
            "Record how many land legally in the service court.",
            "Record how many also reach your chosen target.",
            "Repeat from the left.",
          ],
          practiceNote:
            "Track **legal serves** and **target hits** separately. First improve your ability to start the rally; then improve your placement. Choose one adjustment for your next set rather than changing your whole technique.",
          check: {
            prompt: "Which serve should a beginner prioritise?",
            options: [
              { id: "fast", label: "The fastest serve they can produce." },
              { id: "legal", label: "A legal serve they can repeat into a generous diagonal target." },
              { id: "line", label: "A serve aimed directly at the sideline every time." },
            ],
            answerId: "legal",
            explanation:
              "Reliable placement gives you more opportunities to play rallies. Extra speed can come later.",
          },
          checks: [
            {
              prompt: "Which serve should a beginner prioritise?",
              options: [
                { id: "fast", label: "The fastest serve they can produce." },
                { id: "legal", label: "A legal serve they can repeat into a generous diagonal target." },
                { id: "line", label: "A serve aimed directly at the sideline every time." },
              ],
              answerId: "legal",
              explanation:
                "Reliable placement gives you more opportunities to play rallies. Extra speed can come later.",
            },
            {
              prompt: "What distinguishes a drop serve?",
              options: [
                { id: "throw", label: "You throw the ball down to make it bounce higher." },
                { id: "bounce", label: "You let the ball fall naturally and strike it after a bounce." },
                { id: "before", label: "You must strike the ball before it touches the ground." },
              ],
              answerId: "bounce",
              explanation: "The drop serve is played after a natural drop and bounce.",
            },
            {
              prompt: "You serve successfully. What must your team remember about the return?",
              options: [
                { id: "bounce", label: "You must let it bounce before hitting it." },
                { id: "volley", label: "You must volley it if it comes above net height." },
                { id: "catch", label: "Either partner may catch it and restart." },
              ],
              answerId: "bounce",
              explanation:
                "The serving team must allow the return to bounce, regardless of which serving method started the rally.",
            },
          ],
          closing:
            "Build a serve you can repeat legally from both sides. Start with a large target, develop depth gradually, and stay ready for the return.",
        },
        {
          slug: "the-return",
          title: "The return",
          objective:
            "Return the serve with control, then advance towards the kitchen line while preparing for the next shot.",
          summary:
            "Let the serve bounce, then return it with control into either side of the opponents’ court. A deeper target gives you time to move forward and join your partner, and you should be balanced before the next shot.",
          body: [
            {
              type: "p",
              text: "The **return** is the shot you play after your opponents serve.",
            },
            {
              type: "p",
              text: "A useful return does two jobs: it keeps the rally alive and gives you time to improve your position. You do not need to win the rally with this shot.",
            },
            {
              type: "figure",
              src: "/the-return.jpg",
              alt: "Three steps of the return. Let the serve bounce and move into position. Return with control, aiming deep with room inside the lines. Then move up beside your partner and be balanced before the next shot. If you cannot reach the kitchen line in time, get ready where you are.",
              wide: true,
              width: 1024,
              height: 613,
            },
            { type: "h", text: "Let the serve bounce" },
            { type: "p", text: "You must let the serve bounce before returning it." },
            {
              type: "p",
              text: "Start in a balanced position around or behind the baseline, with enough space to handle a deep serve. Adjust your starting distance to the server and your ability to move comfortably.",
            },
            {
              type: "p",
              text: "Watch the ball and move into position before swinging. Avoid standing so close that a deep serve crowds your feet.",
            },
            { type: "h", text: "Choose a generous target" },
            {
              type: "p",
              text: "Unlike the serve, the return does **not** have to travel diagonally. You may return into either side of the opponents’ court.",
            },
            {
              type: "p",
              text: "For your first practice target, choose a large area towards the back and middle, leaving a comfortable margin from the baseline.",
            },
            {
              type: "p",
              text: "A deeper return can keep the serving team back. A controlled ball with some height over the net can also give you more time to move forward.",
            },
            {
              type: "p",
              text: "**Depth is a tactical goal, not a legal requirement.** A return landing in the kitchen is legal, although a short return may let the opponents advance more easily.",
            },
            { type: "h", text: "Build a controlled shot" },
            {
              type: "p",
              text: "Use a forehand or backhand according to where the serve arrives.",
            },
            {
              type: "steps",
              items: [
                "**Prepare early.** Turn and position your paddle as you recognise the ball’s direction.",
                "**Create space.** Adjust your feet so the ball does not crowd your body.",
                "**Meet it comfortably.** Aim for contact slightly in front rather than reaching late.",
                "**Swing smoothly.** Use enough pace and height to reach your target without forcing the shot.",
                "**Recover your balance.** Be ready to move after contact.",
              ],
            },
            {
              type: "p",
              text: "A return does not need a large backswing. Start with a manageable action that helps you control the paddle face.",
            },
            { type: "h", text: "Return, then move forward" },
            {
              type: "p",
              text: "After a controlled return, advance towards a position just behind your kitchen line.",
            },
            {
              type: "p",
              text: "Your partner will often already be there. Your aim is to join them, rather than have both players begin at the baseline and move forward together.",
            },
            {
              type: "p",
              text: "The serving team must let your return bounce. Use that opportunity to improve your position.",
            },
            { type: "h", text: "Be ready when the opponents hit" },
            {
              type: "p",
              text: "Do not keep rushing forward as an opponent prepares to strike.",
            },
            {
              type: "p",
              text: "Slow your movement and find a balanced ready position so you can react in either direction. If you have not reached the kitchen line, prepare where you are and advance again when the next ball allows.",
            },
            {
              type: "p",
              text: "**Reaching the line is useful. Arriving off balance can make the next shot harder.**",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "The serve crowds your body.",
                  "Begin a little farther back and adjust your feet earlier.",
                ],
                [
                  "Returns repeatedly hit the net.",
                  "Allow more clearance and use a smoother upward path.",
                ],
                [
                  "Returns repeatedly go long.",
                  "Reduce pace and bring your target farther inside the baseline.",
                ],
                [
                  "You stay back watching your return.",
                  "Make forward movement part of your recovery after contact.",
                ],
                [
                  "You are running when the next shot arrives.",
                  "Settle into a ready position earlier, even if you are still moving through midcourt.",
                ],
              ],
            },
          ],
          takeaway: "**Let it bounce. Return with control. Move forward. Get balanced.**",
          practiceIntro:
            "With a partner serving to you, mark a generous target in the deeper half of their court. For ten returns, record three things separately:",
          practice: [
            "**In:** did your return land legally?",
            "**Depth:** did it reach your target?",
            "**Recovery:** did you advance and become ready before the next shot?",
          ],
          practiceNote:
            "A legal return still counts as in even if it misses the deeper target. These separate checks help you identify what to improve.\n\nPractise from both receiving positions. Begin at a comfortable pace before adding a live third shot.",
          check: {
            prompt: "Must your return go diagonally back towards the server?",
            options: [
              { id: "yes", label: "Yes, just like the serve." },
              { id: "no", label: "No, it may land in either side of the opponents’ court." },
              { id: "right", label: "Only when receiving from the right." },
            ],
            answerId: "no",
            explanation: "The diagonal landing requirement applies to the serve, not the return.",
          },
          checks: [
            {
              prompt: "Must your return go diagonally back towards the server?",
              options: [
                { id: "yes", label: "Yes, just like the serve." },
                { id: "no", label: "No, it may land in either side of the opponents’ court." },
                { id: "right", label: "Only when receiving from the right." },
              ],
              answerId: "no",
              explanation: "The diagonal landing requirement applies to the serve, not the return.",
            },
            {
              prompt:
                "You hit a controlled, deep return. Your partner is already at the kitchen line. What is your next aim?",
              options: [
                {
                  id: "advance",
                  label: "Advance towards the kitchen line and prepare for the next shot.",
                },
                {
                  id: "stay",
                  label: "Stay at the baseline until the opponents hit a short ball.",
                },
                { id: "back", label: "Ask your partner to move back beside you." },
              ],
              answerId: "advance",
              explanation: "Use the time created by your return to improve your position.",
            },
            {
              prompt: "You are halfway forward when an opponent is about to hit. What should you prioritise?",
              options: [
                { id: "sprint", label: "Sprinting to the kitchen line regardless of the ball." },
                { id: "ready", label: "Becoming balanced and ready to react." },
                { id: "retreat", label: "Retreating automatically to the baseline." },
              ],
              answerId: "ready",
              explanation:
                "You can continue advancing when the next opportunity allows. First, be ready to handle the incoming shot.",
            },
          ],
          closing:
            "A good return combines a controlled shot with purposeful movement. Aim deep with margin, advance towards your partner, and be balanced for the next ball.",
        },
        {
          slug: "the-drive",
          title: "The drive: forehand and backhand",
          objective:
            "Recognise a suitable opportunity to drive and use a controlled forehand or backhand to send the ball towards a generous target.",
          summary:
            "A drive is a firm groundstroke played after the bounce, on either the forehand or the backhand. Prepare early, meet the ball in front, and choose pace and placement you can control.",
          body: [
            {
              type: "p",
              text: "A **drive** is a firm, attacking shot played after the ball bounces. It travels with more pace and a flatter trajectory than a soft dink or drop.",
            },
            {
              type: "p",
              text: "A drive is a type of **groundstroke**: a shot played after a bounce. A volley is played before the bounce.",
            },
            { type: "p", text: "You can drive on either your forehand or your backhand." },
            {
              type: "figure",
              src: "/the-drive.jpg",
              alt: "A right-handed player hitting a forehand drive and a backhand drive after the bounce. Prepare early, contact in front, and recover your balance. Controlled pace, comfortable contact, and a balanced finish. Left-handed players reverse these sides.",
              wide: true,
              width: 1024,
              height: 640,
            },
            { type: "h", text: "Forehand or backhand?" },
            { type: "h", level: 3, text: "Forehand drive" },
            {
              type: "p",
              text: "Your forehand generally handles balls on the side of your paddle arm.",
            },
            {
              type: "p",
              text: "For a right-handed player, this is usually the right side. For a left-handed player, it is usually the left.",
            },
            {
              type: "p",
              text: "Turn your shoulders, create space beside your body, and meet the ball slightly in front.",
            },
            { type: "h", level: 3, text: "Backhand drive" },
            {
              type: "p",
              text: "Your backhand generally handles balls on the opposite side from your paddle arm.",
            },
            {
              type: "p",
              text: "You may use one hand or two hands on the paddle. Both approaches can work; begin with one you can control comfortably.",
            },
            {
              type: "p",
              text: "Turn your shoulders early rather than reaching across your body at the last moment.",
            },
            {
              type: "p",
              text: "**Forehand and backhand describe how you strike the ball.** They are not different areas of the court.",
            },
            { type: "h", text: "Build the shot in five steps" },
            { type: "h", level: 3, text: "1. Prepare early" },
            {
              type: "p",
              text: "As the ball approaches, recognise which side it is coming towards. Turn your shoulders and prepare the paddle before the ball crowds you.",
            },
            { type: "h", level: 3, text: "2. Adjust your feet" },
            { type: "p", text: "Move into a position that gives you comfortable space to swing." },
            {
              type: "p",
              text: "Use small adjustment steps. Avoid stretching for a ball when you have time to move closer to it.",
            },
            { type: "h", level: 3, text: "3. Meet the ball in front" },
            {
              type: "p",
              text: "Aim for a comfortable contact point slightly ahead of your body.",
            },
            {
              type: "p",
              text: "For early practice, use feeds that bounce into a manageable hitting area around knee-to-waist height. This is a practice choice, not a rule: contact height changes with the incoming ball and your position.",
            },
            { type: "h", level: 3, text: "4. Swing through with control" },
            {
              type: "p",
              text: "Use a smooth forward-and-upward action. Let your body turn contribute to the shot rather than relying on a sudden wrist flick.",
            },
            {
              type: "p",
              text: "Give the ball enough clearance over the net. A drive should not require you to skim the tape.",
            },
            { type: "h", level: 3, text: "5. Recover" },
            {
              type: "p",
              text: "Finish balanced and bring the paddle back towards your ready position.",
            },
            {
              type: "p",
              text: "Watch the opponents’ response. A drive can come back quickly, so do not assume your shot has finished the rally.",
            },
            { type: "h", text: "Choose a useful target" },
            {
              type: "p",
              text: "When practising against a partner who stays back, aim towards a large target in the deeper part of their court, with room inside the boundaries.",
            },
            {
              type: "p",
              text: "In a game, the useful target depends on where your opponents are. Against players at the kitchen line, a controlled drive towards a gap or a low contact point may be more useful than simply trying to hit deep.",
            },
            {
              type: "p",
              text: "Begin with placement. Add pace only while you can maintain control.",
            },
            { type: "h", text: "When is a drive a reasonable choice?" },
            {
              type: "p",
              text: "Look for a ball you can reach comfortably, with enough time and balance to swing.",
            },
            { type: "p", text: "A drive may be useful when:" },
            {
              type: "bullets",
              items: [
                "The bounce gives you a manageable contact.",
                "You have space to prepare.",
                "You see a target you can reach without forcing the shot.",
              ],
            },
            {
              type: "p",
              text: "Be more cautious when the ball is very low, behind you, tight to your feet, or forces you to stretch.",
            },
            {
              type: "p",
              text: "**A low ball can still be driven, but it gives a beginner less margin for error.** Reducing pace or choosing a softer shot may be more effective.",
            },
            { type: "h", text: "A softer shot is not always a dink" },
            {
              type: "p",
              text: "The name depends on the shot’s purpose and where you play it:",
            },
            {
              type: "bullets",
              items: [
                "**Dink:** a soft shot played near the kitchen, intended to land in the opponents’ kitchen.",
                "**Drop:** a softer shot from farther back, intended to land in the opponents’ kitchen.",
                "**Reset:** a controlled shot that takes pace off the ball and helps you recover from pressure.",
              ],
            },
            {
              type: "p",
              text: "You will learn these options as the course progresses. For now, avoid forcing a hard drive when you cannot control the contact.",
            },
          ],
          takeaway:
            "**Prepare early. Create space. Contact in front. Swing with control. Recover.**\nFirm does not mean maximum power.",
          practiceIntro:
            "Ask a partner to feed comfortable balls to your forehand. They should stay back and remain ready for your shot.",
          practiceOrdered: true,
          practice: [
            "Hit five controlled forehand drives towards a large target.",
            "Repeat with five backhand drives.",
            "Count how many land in, then how many reach your target.",
            "Repeat at a pace that lets you finish balanced.",
          ],
          practiceNote:
            "If a feed leaves you crowded or reaching, stop and reset the exercise. You do not have to force a drive from every ball.\n\nPractise both sides separately before mixing the feeds.",
          check: {
            prompt: "You hit a firm shot after the bounce using your backhand. What is it?",
            options: [
              { id: "drive", label: "A backhand drive." },
              { id: "volley", label: "A volley." },
              { id: "dink", label: "Always a dink." },
            ],
            answerId: "drive",
            explanation:
              "The ball bounced before contact, and you used a firm backhand groundstroke.",
          },
          checks: [
            {
              prompt: "You hit a firm shot after the bounce using your backhand. What is it?",
              options: [
                { id: "drive", label: "A backhand drive." },
                { id: "volley", label: "A volley." },
                { id: "dink", label: "Always a dink." },
              ],
              answerId: "drive",
              explanation:
                "The ball bounced before contact, and you used a firm backhand groundstroke.",
            },
            {
              prompt: "A ball stays low at your feet while you are in midcourt. Must you play a dink?",
              options: [
                { id: "yes", label: "Yes—every low ball requires a dink." },
                {
                  id: "no",
                  label: "No—adjust your position and consider a controlled or softer response.",
                },
              ],
              answerId: "no",
              explanation:
                "A dink is a specific soft shot played near the kitchen. From midcourt, a drop or reset may be more appropriate than forcing a drive.",
            },
            {
              prompt: "What should you prioritise when first practising drives?",
              options: [
                { id: "speed", label: "Maximum speed." },
                { id: "control", label: "Controlled placement and a balanced finish." },
                { id: "line", label: "A target directly on the sideline." },
              ],
              answerId: "control",
              explanation: "Control helps you repeat the shot and prepare for what comes back.",
            },
          ],
          closing:
            "A drive is a firm shot after the bounce. Use either forehand or backhand, create a comfortable contact, and choose pace and placement you can control.",
        },
        {
          slug: "the-dink",
          title: "The dink",
          objective:
            "Hit a controlled shot after a bounce from near the kitchen line, aiming to land it softly in the opponents’ kitchen.",
          summary:
            "A dink is a soft shot after a bounce from near the kitchen, aimed into the opponents’ kitchen. Keep the swing small, give yourself net clearance, and recover before the next ball.",
          body: [
            {
              type: "p",
              text: "A **dink** is a soft shot played after a bounce from near the kitchen, intended to land in the opponents’ non-volley zone.",
            },
            {
              type: "p",
              text: "It gives you a way to handle low balls without forcing a hard shot. You can dink with either your forehand or your backhand.",
            },
            {
              type: "figure",
              src: "/the-dink.jpg",
              alt: "Three parts of a dink. Let the ball bounce and move into a comfortable position. Guide it over the net with a small, smooth swing. Clear the net and land softly in the opponents’ kitchen. Playing a bounced ball inside the kitchen is legal.",
              wide: true,
              width: 1024,
              height: 613,
            },
            { type: "h", text: "Why play a soft shot?" },
            {
              type: "p",
              text: "When everyone is near the kitchen line, a low ball can be difficult to attack safely. Hitting harder may send it into the net or lift it into an easy attacking position.",
            },
            {
              type: "p",
              text: "A controlled dink helps you stay in the rally while making your opponents play another shot.",
            },
            {
              type: "p",
              text: "As you improve, you can use placement to move them, create space, and wait for a better attacking opportunity.",
            },
            { type: "p", text: "**A dink is purposeful—not simply a gentle hit back.**" },
            { type: "h", text: "Start with a balanced position" },
            { type: "p", text: "Stand near your kitchen line with:" },
            {
              type: "bullets",
              items: [
                "Knees comfortably bent.",
                "Your paddle in front.",
                "Enough space to move towards the ball.",
                "Your weight balanced rather than leaning heavily forward.",
              ],
            },
            {
              type: "p",
              text: "Watch the incoming bounce. Use small adjustment steps to find a comfortable contact instead of reaching with your arm alone.",
            },
            { type: "h", text: "Build a compact action" },
            { type: "h", level: 3, text: "1. Let the ball bounce" },
            {
              type: "p",
              text: "Recognise where it will land and position yourself to meet it slightly in front of your body.",
            },
            {
              type: "p",
              text: "Step into the kitchen if needed. Playing a bounced ball there is legal.",
            },
            { type: "h", level: 3, text: "2. Keep the backswing small" },
            { type: "p", text: "Prepare the paddle near the expected contact point." },
            {
              type: "p",
              text: "A large backswing makes it harder to judge the gentle pace needed for a short shot.",
            },
            { type: "h", level: 3, text: "3. Guide the ball over the net" },
            {
              type: "p",
              text: "Use a smooth lifting action, with the paddle face slightly open.",
            },
            {
              type: "p",
              text: "Keep your grip relaxed enough to avoid a tense, abrupt hit. Aim for a gentle arc with comfortable net clearance, rather than trying to skim the tape.",
            },
            { type: "h", level: 3, text: "4. Recover for the next ball" },
            {
              type: "p",
              text: "Bring the paddle back in front and regain your balance.",
            },
            {
              type: "p",
              text: "If you entered the kitchen, establish both feet completely outside it before playing a later volley.",
            },
            { type: "h", text: "Aim for a useful landing" },
            {
              type: "p",
              text: "Begin with a generous target inside the opponents’ kitchen, away from the sidelines.",
            },
            {
              type: "p",
              text: "The landing location matters, but so does the ball’s height and pace:",
            },
            {
              type: "bullets",
              items: [
                "A ball hit too high may be intercepted before it lands.",
                "A firm ball may bounce up into an easier attacking position.",
                "A ball hit too cautiously may fail to clear the net.",
              ],
            },
            {
              type: "p",
              text: "Your aim is enough height to cross safely, followed by a controlled descent and a manageable bounce.",
            },
            {
              type: "p",
              text: "Landing in the kitchen does not automatically make a shot difficult to attack.",
            },
            { type: "h", text: "Straight ahead or crosscourt?" },
            {
              type: "p",
              text: "You can dink straight ahead or diagonally across the court.",
            },
            {
              type: "p",
              text: "**Straight ahead** is a useful starting exercise because the direction is simple.",
            },
            {
              type: "p",
              text: "**Crosscourt** gives the ball a longer path across the kitchen and can offer more room to manage its depth. It still requires control—especially when aiming towards a sideline.",
            },
            {
              type: "p",
              text: "Practise both. Choose a large target before trying sharp angles.",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "The ball repeatedly hits the net.",
                  "Allow more clearance and use a smoother lifting action.",
                ],
                ["The ball travels too far.", "Shorten the swing and reduce pace."],
                [
                  "The ball pops up high.",
                  "Check for an abrupt wrist action or an excessively open paddle face.",
                ],
                [
                  "You reach and lose balance.",
                  "Move your feet earlier and create space for contact.",
                ],
                [
                  "You watch your shot instead of recovering.",
                  "Return the paddle to ready position after each hit.",
                ],
              ],
            },
          ],
          takeaway: "**Small swing. Comfortable clearance. Soft landing. Ready again.**",
          practiceIntro: "With a partner, begin opposite each other near the kitchen lines.",
          practiceOrdered: true,
          practice: [
            "Start with a gentle feed.",
            "Let each ball bounce before returning it.",
            "Aim towards a large area in your partner’s kitchen.",
            "Try to complete five consecutive controlled shots between you.",
            "Build towards ten, then repeat crosscourt.",
          ],
          practiceNote:
            "If the rally breaks down, restart calmly. Note whether the problem was contact, height, direction, or pace.\n\nA shot landing beyond the kitchen is not automatically a fault during a rally—it simply misses the target for this exercise.",
          check: {
            prompt:
              "You are near the kitchen line. A low ball bounces in front of you, and you want a controlled reply into the opponents’ kitchen. Which shot fits?",
            options: [
              { id: "dink", label: "A dink." },
              { id: "volley", label: "A volley." },
              { id: "overhead", label: "An overhead." },
            ],
            answerId: "dink",
            explanation:
              "A dink is a soft shot after a bounce, played near the kitchen into the opposing kitchen.",
          },
          checks: [
            {
              prompt:
                "You are near the kitchen line. A low ball bounces in front of you, and you want a controlled reply into the opponents’ kitchen. Which shot fits?",
              options: [
                { id: "dink", label: "A dink." },
                { id: "volley", label: "A volley." },
                { id: "overhead", label: "An overhead." },
              ],
              answerId: "dink",
              explanation:
                "A dink is a soft shot after a bounce, played near the kitchen into the opposing kitchen.",
            },
            {
              prompt:
                "Your dink lands in the kitchen but bounces high. Does that guarantee your opponents cannot attack it?",
              options: [
                { id: "yes", label: "Yes—any ball landing in the kitchen is unattackable." },
                { id: "no", label: "No—the height and pace of the ball also matter." },
              ],
              answerId: "no",
              explanation: "A high bounce may give your opponents an attacking opportunity.",
            },
            {
              prompt:
                "You step into the kitchen to return a bounced ball. What should you remember before a later volley?",
              options: [
                {
                  id: "both",
                  label: "Both feet must establish contact completely outside the kitchen.",
                },
                { id: "one", label: "One foot outside is enough." },
                { id: "wait", label: "You must wait for your partner to hit first." },
              ],
              answerId: "both",
              explanation:
                "Playing the bounced ball inside is legal. Volleying afterwards requires you to re-establish both feet outside.",
            },
          ],
          closing:
            "Use a dink to control a low exchange near the kitchen. Keep the action compact, give yourself net clearance, and recover for the next shot.",
        },
        {
          slug: "the-volley",
          title: "The volley",
          objective:
            "Play a controlled shot before the bounce while staying balanced and respecting the kitchen rules.",
          summary:
            "A volley is a shot hit before the bounce. Use a compact block or punch from outside the kitchen, and let the ball bounce when that gives you better control.",
          body: [
            { type: "p", text: "A **volley** is a shot you hit before the ball bounces." },
            {
              type: "p",
              text: "You can volley with your forehand or backhand. Unlike a drive, which follows a bounce, a volley intercepts the ball in the air.",
            },
            {
              type: "p",
              text: "Near the kitchen line, this can give your opponents less time to react. It can also help you defend against a fast shot.",
            },
            {
              type: "figure",
              src: "/the-volley.jpg",
              alt: "Block volley and punch volley. A block uses a quiet paddle and the incoming pace. A punch adds a short forward action when you are balanced. Contact the ball before the bounce, stay outside the kitchen, and keep your momentum out.",
              wide: true,
              width: 1024,
              height: 613,
            },
            { type: "h", text: "Start in a ready position" },
            { type: "p", text: "Stand comfortably outside the kitchen, with:" },
            {
              type: "bullets",
              items: [
                "Knees slightly bent.",
                "Feet balanced and ready to adjust.",
                "Paddle in front of your body.",
                "Elbows relaxed rather than locked straight.",
              ],
            },
            {
              type: "p",
              text: "Keep the paddle high enough to respond without first lifting it from your knees. Adjust its height to the situation rather than holding it rigidly in one place.",
            },
            { type: "h", text: "Meet the ball in front" },
            {
              type: "p",
              text: "Watch the incoming ball and bring the paddle into its path.",
            },
            {
              type: "p",
              text: "Aim for contact in front of your body, with a compact action. A large backswing takes time and can make the ball harder to control.",
            },
            {
              type: "p",
              text: "Use small foot adjustments where possible. Avoid leaning so far forward that you cannot recover your balance.",
            },
            { type: "h", text: "Block or punch?" },
            { type: "h", level: 3, text: "Block volley" },
            {
              type: "p",
              text: "Against a faster ball, you may need very little forward movement.",
            },
            {
              type: "p",
              text: "Present the paddle face, control its angle, and use the incoming pace to redirect the ball. A softer block can help slow the exchange.",
            },
            { type: "h", level: 3, text: "Punch volley" },
            {
              type: "p",
              text: "When you have a comfortable ball and enough balance, add a short forward action.",
            },
            {
              type: "p",
              text: "Think **compact and controlled**, rather than swinging as you would for a drive.",
            },
            {
              type: "p",
              text: "Neither option guarantees a winner. Choose an action that lets you place the ball and prepare for the reply.",
            },
            { type: "h", text: "Know when to let it bounce" },
            { type: "p", text: "Consider playing after the bounce when:" },
            {
              type: "bullets",
              items: [
                "Reaching the ball would make you lose balance.",
                "You would need to touch the kitchen or its line to volley.",
                "The ball is dropping awkwardly low and a bounced shot offers more control.",
              ],
            },
            {
              type: "p",
              text: "A ball’s expected landing location does not decide whether volleying is legal.",
            },
            {
              type: "p",
              text: "**You may reach over the kitchen to volley while remaining legally outside it.** Your feet, equipment, and volleying momentum must still comply with the kitchen rules.",
            },
            { type: "h", text: "Remember the kitchen restrictions" },
            { type: "p", text: "Before volleying:" },
            {
              type: "bullets",
              items: [
                "The opening two-bounce requirement must be complete.",
                "You must not be touching the kitchen or its line.",
                "If you previously entered the kitchen, both feet must have re-established contact completely outside it.",
              ],
            },
            {
              type: "p",
              text: "After contact, your volleying momentum must not carry you into the kitchen—even if your shot has already ended the rally.",
            },
            {
              type: "p",
              text: "Do not confuse **reaching over the zone** with **touching the zone**.",
            },
            { type: "h", text: "Recover immediately" },
            {
              type: "p",
              text: "After your volley, return the paddle to a useful ready position.",
            },
            {
              type: "p",
              text: "Stay balanced and watch your opponents. Exchanges near the net can be quick, so a controlled finish helps you prepare for the next ball.",
            },
          ],
          takeaway: "**Paddle ready. Contact in front. Compact action. Stay balanced.**",
          practiceIntro:
            "With a partner across the net, begin a comfortable step behind your kitchen line.",
          practiceOrdered: true,
          practice: [
            "Ask for gentle feeds you can reach without stretching.",
            "Volley towards a generous target.",
            "Return the paddle to ready position after each shot.",
            "Practise both forehand and backhand contacts.",
            "Progress to slightly faster feeds, using a quiet block rather than adding unnecessary force.",
          ],
          practiceNote:
            "If a feed pulls you off balance or requires you to enter the kitchen, let it bounce and play it afterwards.\n\nDo not automatically leave every ball heading towards the kitchen. Practise deciding whether you can intercept it legally and comfortably.",
          check: {
            prompt:
              "Which example is a legal volley, assuming the opening two-bounce requirement is complete?",
            options: [
              { id: "line", label: "You hit before the bounce while touching the kitchen line." },
              {
                id: "legal",
                label:
                  "You hit before the bounce from outside the kitchen and keep your volleying momentum out.",
              },
              {
                id: "bounce",
                label: "You enter the kitchen and return a ball after it bounces.",
              },
            ],
            answerId: "legal",
            explanation:
              "A is a kitchen fault. C can be legal, but it is not a volley because the ball bounced.",
          },
          checks: [
            {
              prompt:
                "Which example is a legal volley, assuming the opening two-bounce requirement is complete?",
              options: [
                { id: "line", label: "You hit before the bounce while touching the kitchen line." },
                {
                  id: "legal",
                  label:
                    "You hit before the bounce from outside the kitchen and keep your volleying momentum out.",
                },
                {
                  id: "bounce",
                  label: "You enter the kitchen and return a ball after it bounces.",
                },
              ],
              answerId: "legal",
              explanation:
                "A is a kitchen fault. C can be legal, but it is not a volley because the ball bounced.",
            },
            {
              prompt: "A ball is heading towards your kitchen. Must you let it bounce?",
              options: [
                { id: "yes", label: "Yes—every ball heading into the kitchen must bounce." },
                {
                  id: "no",
                  label: "No—you may volley it if you can do so legally and under control.",
                },
              ],
              answerId: "no",
              explanation:
                "The kitchen restricts your contact with the court during a volley. It does not prevent you from reaching over the zone.",
            },
            {
              prompt: "A fast ball comes directly towards your paddle. What is a useful beginner response?",
              options: [
                { id: "swing", label: "Take a large backswing and hit harder." },
                { id: "block", label: "Use a compact block to control and redirect its pace." },
                { id: "step", label: "Step into the kitchen to get closer." },
              ],
              answerId: "block",
              explanation: "A quiet paddle action can provide more control than adding a large swing.",
            },
          ],
          closing:
            "A volley intercepts the ball before it bounces. Use a compact block or punch, stay balanced, and choose a bounced shot when it gives you better control.",
        },
        {
          slug: "drop-lob-overhead",
          title: "Meet the drop, lob, and overhead",
          objective:
            "Recognise a drop, a lob, and an overhead, and explain a situation in which each could be useful.",
          summary:
            "A drop softens the ball into the opponents’ kitchen from farther back. A lob goes high over them and needs depth. An overhead plays a high ball from a balanced position, and the kitchen rules still apply if you hit it before the bounce.",
          body: [
            {
              type: "p",
              text: "You have learned the serve, return, drive, dink, and volley. Three more shots will help you understand how players change the pace, height, and direction of a rally.",
            },
            {
              type: "p",
              text: "You do not need to master them yet. Start by recognising their purpose.",
            },
            {
              type: "figure",
              src: "/drop-lob-overhead.jpg",
              alt: "Drop, lob, and overhead. A drop is a soft shot into the kitchen that can create a chance to move forward. A lob goes high over the opponents and should land deep with room inside the baseline. An overhead is a high contact with controlled placement, hit from a balanced position while keeping volleying momentum out.",
              wide: true,
              width: 1024,
              height: 769,
            },
            { type: "h", text: "The drop: soften the ball from farther back" },
            {
              type: "p",
              text: "A **drop** is a soft shot, commonly played after a bounce from the backcourt or midcourt, intended to land in the opponents’ kitchen.",
            },
            {
              type: "p",
              text: "It has a similar destination to a dink but travels from farther away.",
            },
            {
              type: "p",
              text: "A useful drop can make opponents contact the ball low, limiting their opportunity to attack. That may create time for you and your partner to advance.",
            },
            { type: "h", level: 3, text: "When might you use it?" },
            {
              type: "p",
              text: "You are back near the baseline while the opponents are established at their kitchen line. Rather than forcing a hard drive, you send a controlled ball towards their kitchen.",
            },
            { type: "h", level: 3, text: "First practice cues" },
            {
              type: "bullets",
              items: [
                "Get balanced before contact.",
                "Use a smooth lifting action.",
                "Allow enough arc to clear the net.",
                "Choose a generous kitchen target.",
              ],
            },
            {
              type: "p",
              text: "After hitting, watch the ball and your opponents. Advance when the shot gives you time; get ready before their reply.",
            },
            {
              type: "p",
              text: "**Do not automatically rush forward after every drop.** A high drop may give the opponents an attacking opportunity.",
            },
            { type: "h", text: "The lob: go over the opponents" },
            {
              type: "p",
              text: "A **lob** sends the ball high over your opponents, aiming to land deep inside their court.",
            },
            {
              type: "p",
              text: "It can move players away from the kitchen or give you time to recover under pressure.",
            },
            { type: "h", level: 3, text: "When might you use it?" },
            {
              type: "p",
              text: "Your opponents are close to the kitchen line, and you see an opportunity to send the ball over their reach into the space behind them.",
            },
            { type: "h", level: 3, text: "First practice cues" },
            {
              type: "bullets",
              items: [
                "Use a controlled upward action.",
                "Aim for height and depth together.",
                "Leave room inside the baseline.",
              ],
            },
            {
              type: "p",
              text: "Height alone is not enough. A short lob may give your opponents an easy overhead.",
            },
            {
              type: "p",
              text: "When retrieving a lob, turn and move into position rather than backpedalling. Communicate with your partner about who will play it.",
            },
            { type: "h", text: "The overhead: handle a high ball" },
            {
              type: "p",
              text: "An **overhead** is a shot struck with the paddle above your head, usually before the ball bounces.",
            },
            {
              type: "p",
              text: "It is commonly used against a short lob or another high, floating ball.",
            },
            { type: "h", level: 3, text: "When might you use it?" },
            {
              type: "p",
              text: "The ball is high enough to meet comfortably above and slightly in front of you, and you have time to get balanced.",
            },
            { type: "h", level: 3, text: "First practice cues" },
            {
              type: "bullets",
              items: [
                "Turn your body and move into position early.",
                "Meet the ball high and slightly in front.",
                "Use a controlled action.",
                "Aim into available court space with margin.",
              ],
            },
            {
              type: "p",
              text: "You do not need maximum power. Placement and balance are more useful starting goals.",
            },
            {
              type: "p",
              text: "If the ball is drifting behind you, do not force an off-balance overhead. Turn, move, and consider playing after the bounce instead.",
            },
            {
              type: "p",
              text: "An overhead hit before the bounce is also a volley, so the kitchen restrictions still apply.",
            },
            { type: "h", text: "Compare the three shots" },
            {
              type: "table",
              headers: ["Shot", "Main purpose", "Typical target"],
              rows: [
                [
                  "**Drop**",
                  "Soften play from farther back and create an opportunity to advance.",
                  "Opponents’ kitchen",
                ],
                [
                  "**Lob**",
                  "Send the ball over opponents or gain recovery time.",
                  "Deep court space",
                ],
                [
                  "**Overhead**",
                  "Play a high ball from a balanced position.",
                  "Available space inside the court",
                ],
              ],
            },
          ],
          takeaway:
            "**Drop towards the kitchen. Lob over the opponents. Overhead when the high ball is comfortably in reach.**\nThe right choice depends on the ball, your balance, and where everyone is positioned.",
          practiceIntro: "Practise cooperatively with a partner, using gentle feeds.",
          practice: [
            "**Recognise a drop**\nFrom midcourt, play five soft shots towards a large kitchen target. Begin closer to the net and increase the distance gradually.\n\nWatch each landing before deciding whether the shot would give you time to advance.",
            "**Explore a lob**\nFrom a comfortable position, send five controlled lobs towards a deep target. Your partner watches from a safe position rather than standing directly beneath the intended flight path.\n\nNotice which balls have both height and depth.",
            "**Meet an overhead**\nHave your partner gently feed a high ball that you can reach without moving backwards. Practise a few controlled overheads towards a large, clear target.\n\nBegin slowly. Reset an awkward feed rather than chasing it or swinging off balance.",
          ],
          check: {
            prompt:
              "You are near the baseline with opponents at the kitchen line. Which shot is intended to land softly in their kitchen and create an opportunity to advance?",
            options: [
              { id: "drop", label: "A drop." },
              { id: "overhead", label: "An overhead." },
              { id: "serve", label: "A volley serve." },
            ],
            answerId: "drop",
            explanation:
              "A drop can reduce the opponents’ attacking options. You still need to read their reply before advancing.",
          },
          checks: [
            {
              prompt:
                "You are near the baseline with opponents at the kitchen line. Which shot is intended to land softly in their kitchen and create an opportunity to advance?",
              options: [
                { id: "drop", label: "A drop." },
                { id: "overhead", label: "An overhead." },
                { id: "serve", label: "A volley serve." },
              ],
              answerId: "drop",
              explanation:
                "A drop can reduce the opponents’ attacking options. You still need to read their reply before advancing.",
            },
            {
              prompt:
                "Your lob goes high but lands short, within an opponent’s comfortable overhead reach. What is the risk?",
              options: [
                { id: "attack", label: "They may attack it with an overhead." },
                { id: "twice", label: "They must let it bounce twice." },
                { id: "restart", label: "The rally automatically restarts." },
              ],
              answerId: "attack",
              explanation: "A lob needs useful depth as well as height.",
            },
            {
              prompt:
                "A high ball is drifting behind you, and you cannot reach it comfortably for an overhead. What is the better response?",
              options: [
                { id: "back", label: "Backpedal quickly and swing while falling backwards." },
                { id: "turn", label: "Turn, move into position, and consider letting it bounce." },
                { id: "hard", label: "Close your eyes and hit as hard as possible." },
              ],
              answerId: "turn",
              explanation:
                "Choose a response that lets you regain position and control rather than forcing the overhead.",
            },
          ],
          closing:
            "These shots give you different ways to manage a rally. Learn their purpose first, then build control through comfortable, repeatable practice.",
        },
      ],
    },
    {
      number: 5,
      title: "Footwork & positioning",
      summary: "Get ready, move without rushing the swing, and cover the court with a partner.",
      lessons: [
        {
          slug: "ready-position",
          title: "Ready position",
          objective:
            "Recover to a balanced stance with your paddle in front, ready to respond as your opponent hits.",
          summary:
            "Ready position is the balanced stance you return to between shots. Keep your feet available to move, your knees softly bent, and your paddle in front so you can respond on either side.",
          body: [
            {
              type: "p",
              text: "Your shot does not finish when the ball leaves your paddle. You also need to prepare for what comes back.",
            },
            {
              type: "p",
              text: "The **ready position** is the balanced position you return to between shots. It helps you move, turn, and bring the paddle to either side without unnecessary delay.",
            },
            {
              type: "figure",
              src: "/ready-position.jpg",
              alt: "A balanced ready position. Eyes on play, relaxed elbows, paddle in front, soft knees, and feet comfortably apart. Recover after each shot and prepare before your opponent hits.",
              wide: true,
              width: 1024,
              height: 616,
            },
            { type: "h", text: "Build your ready position" },
            { type: "h", level: 3, text: "Feet comfortably apart" },
            {
              type: "p",
              text: "Begin with your feet around shoulder-width apart, or slightly wider if that feels comfortable.",
            },
            {
              type: "p",
              text: "Your stance should let you move in either direction. Avoid placing your feet so close together that you wobble, or so wide that taking the next step feels difficult.",
            },
            { type: "h", level: 3, text: "Knees and hips softly bent" },
            { type: "p", text: "Lower yourself a little through your knees and hips." },
            {
              type: "p",
              text: "You do not need a deep squat. Choose a height you can maintain comfortably while keeping your head up and watching play.",
            },
            { type: "h", level: 3, text: "Weight balanced and available to move" },
            {
              type: "p",
              text: "Avoid settling heavily onto your heels or leaning so far forward that you begin to fall.",
            },
            {
              type: "p",
              text: "Feel ready to push off in either direction. You do not need to lift your heels and remain on tiptoes.",
            },
            { type: "h", level: 3, text: "Paddle in front" },
            {
              type: "p",
              text: "Hold the paddle in front of your body with your elbows comfortably bent.",
            },
            {
              type: "p",
              text: "Near the kitchen line, keeping the paddle up around your upper body helps you respond to quicker exchanges. Farther back, adjust its height to the balls you are likely to receive.",
            },
            {
              type: "p",
              text: "The aim is a useful starting position—not an exact height you must hold throughout the game.",
            },
            { type: "h", level: 3, text: "Hands and shoulders relaxed" },
            {
              type: "p",
              text: "Hold the paddle securely without squeezing it as hard as possible.",
            },
            {
              type: "p",
              text: "Keep your shoulders relaxed. Tension can make small adjustments feel slower and less comfortable.",
            },
            { type: "h", text: "Watch the ball and the opponent" },
            {
              type: "p",
              text: "As the ball travels towards your opponent, prepare for their contact.",
            },
            {
              type: "p",
              text: "Watch the player who is about to hit. Avoid becoming distracted by your own previous shot or looking towards where you hope the next ball will go.",
            },
            {
              type: "p",
              text: "Your paddle position should leave you ready for either a forehand or a backhand response.",
            },
            { type: "h", text: "Recover before the next shot" },
            { type: "p", text: "After hitting:" },
            {
              type: "steps",
              items: [
                "Bring the paddle back in front.",
                "Regain a balanced stance.",
                "Adjust your position as the rally requires.",
                "Prepare to react as the opponent strikes.",
              ],
            },
            {
              type: "p",
              text: "You do not have to freeze completely still. The important distinction is between being balanced and available to move, and still rushing or leaning in one direction.",
            },
            {
              type: "p",
              text: "The next lesson explains how to time your movement and stopping.",
            },
            { type: "h", text: "Ready position is not a fixed place on court" },
            {
              type: "p",
              text: "You can use a ready position near the baseline, in midcourt, or near the kitchen line.",
            },
            {
              type: "p",
              text: "It describes **how you prepare**, rather than a particular spot you must stand on.",
            },
            {
              type: "p",
              text: "You also do not have to return to the centre of the court after every shot. Recover to a position appropriate to the rally and your partner.",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "Your paddle drops beside your leg.",
                  "Bring it back in front immediately after each shot.",
                ],
                [
                  "You stand upright between shots.",
                  "Restore a comfortable bend through knees and hips.",
                ],
                [
                  "You feel stuck on your heels.",
                  "Rebalance so you can take a small step either way.",
                ],
                [
                  "Your arms feel tense.",
                  "Relax your shoulders and reduce unnecessary grip pressure.",
                ],
                [
                  "You are still leaning after contact.",
                  "Regain balance before committing to the next movement.",
                ],
              ],
            },
          ],
          takeaway:
            "**Balanced feet. Soft knees. Paddle in front. Eyes on play.**\nYou are preparing to react, not posing for a photograph.",
          practice: [
            "**Check your balance**\nTake your ready position without a ball.\n\nAsk a partner to point left or right at random. Take one small step in that direction, then recover.\n\nIf the first step feels awkward, adjust your stance width or weight distribution.",
            "**Build the recovery habit**\nExchange gentle shots with a partner.\n\nAfter each contact, quietly say **“ready”** as you bring the paddle back in front and recover your balance.\n\nYour partner should give you time to reset initially. Gradually shorten the pause as the habit becomes easier.",
          ],
          check: {
            prompt: "As your opponent prepares to hit, where should your paddle generally be?",
            options: [
              { id: "knee", label: "Hanging beside your knee." },
              { id: "front", label: "In front of your body, ready to adjust." },
              { id: "back", label: "Behind your shoulder for a large swing." },
            ],
            answerId: "front",
            explanation:
              "Starting in front reduces unnecessary movement and leaves you ready to respond on either side.",
          },
          checks: [
            {
              prompt: "As your opponent prepares to hit, where should your paddle generally be?",
              options: [
                { id: "knee", label: "Hanging beside your knee." },
                { id: "front", label: "In front of your body, ready to adjust." },
                { id: "back", label: "Behind your shoulder for a large swing." },
              ],
              answerId: "front",
              explanation:
                "Starting in front reduces unnecessary movement and leaves you ready to respond on either side.",
            },
            {
              prompt: "What should your stance allow you to do?",
              options: [
                {
                  id: "move",
                  label: "Move in either direction without first recovering from a lean.",
                },
                { id: "toes", label: "Stay on tiptoes throughout the rally." },
                { id: "straight", label: "Keep your knees completely straight." },
              ],
              answerId: "move",
              explanation: "The purpose is balance and mobility, not a rigid body position.",
            },
            {
              prompt: "You have just played a good shot. What should happen next?",
              options: [
                { id: "watch", label: "Watch it while leaving your paddle at the end of the swing." },
                { id: "recover", label: "Recover your paddle, balance, and attention for the reply." },
                { id: "middle", label: "Automatically move to the middle of the court." },
              ],
              answerId: "recover",
              explanation: "A good shot still needs a ready response to whatever comes back.",
            },
          ],
          closing:
            "Ready position is a repeatable habit: recover your balance, bring the paddle in front, and prepare before the opponent hits.",
        },
        {
          slug: "moving-and-balance",
          title: "Moving, stopping, and staying balanced",
          objective:
            "Move towards the ball, adjust your spacing, and regain enough balance to control your shot and recover afterwards.",
          summary:
            "Prepare as your opponent hits, cover the distance, then shorten your steps near the ball. Control your momentum so you can place the shot and recover, including when you are moving forward.",
          body: [
            {
              type: "p",
              text: "Good footwork helps you reach the ball in a position where you can do something useful with it.",
            },
            {
              type: "p",
              text: "The aim is not simply to arrive quickly. It is to arrive with space to swing, control your movement, and prepare for the next shot.",
            },
            {
              type: "figure",
              src: "/moving-and-balance.jpg",
              alt: "Three stages of footwork. Prepare with a small split step as your opponent hits. Move to cover the distance, then shorten your steps. Hit with control and recover your balance. A solid arrow marks movement and a dotted path marks the ball.",
              wide: true,
              width: 1024,
              height: 613,
            },
            { type: "h", text: "Prepare as your opponent hits" },
            {
              type: "p",
              text: "As your opponent prepares to strike, bring your movement under control and become ready to respond.",
            },
            {
              type: "p",
              text: "A **split step** can help: a small, light hop or settling movement that leaves your feet comfortably apart and your knees softly bent.",
            },
            {
              type: "p",
              text: "Begin preparing just before contact, timing your landing or weight reset around the hit so you can react as the ball’s direction becomes clear.",
            },
            {
              type: "p",
              text: "Keep it small. A large jump leaves you waiting to land instead of moving towards the ball.",
            },
            { type: "h", text: "Move according to the distance" },
            { type: "p", text: "Different situations need different steps." },
            { type: "h", level: 3, text: "Cover distance first" },
            {
              type: "p",
              text: "If the ball is far away, turn and move naturally towards it. Larger steps may be necessary.",
            },
            {
              type: "p",
              text: "Trying to cover the entire distance with tiny shuffles can leave you late.",
            },
            { type: "h", level: 3, text: "Adjust as you approach" },
            {
              type: "p",
              text: "As you get closer, shorten your steps to judge your spacing.",
            },
            {
              type: "p",
              text: "These adjustments help you avoid becoming crowded by the ball or stretching farther than necessary.",
            },
            { type: "p", text: "**Travel to the ball, then fine-tune your position.**" },
            { type: "h", text: "Create space for contact" },
            {
              type: "p",
              text: "Aim to meet the ball comfortably in front of your body.",
            },
            {
              type: "p",
              text: "Move close enough to reach it without overextending, but leave room between the ball and your body for the paddle to work.",
            },
            {
              type: "p",
              text: "If you repeatedly contact the ball beside or behind you, prepare and move earlier rather than simply swinging faster.",
            },
            { type: "h", text: "Control your momentum" },
            {
              type: "p",
              text: "When time allows, slow down before your shot and hit from a stable base.",
            },
            {
              type: "p",
              text: "You do not have to freeze completely. Some shots involve stepping through contact or playing while moving.",
            },
            { type: "p", text: "The useful question is:" },
            {
              type: "p",
              text: "**Can I control the paddle and recover, or is my movement carrying me past the ball?**",
            },
            {
              type: "p",
              text: "If you are stretched or off balance, reduce your ambition. A controlled reply may be more useful than attempting a powerful winner.",
            },
            { type: "h", text: "When moving towards the kitchen" },
            {
              type: "p",
              text: "After a return or a useful approach shot, move forward while watching your opponents.",
            },
            {
              type: "p",
              text: "As they prepare to hit, settle into a balanced ready position—even if you have not reached the kitchen line.",
            },
            {
              type: "p",
              text: "Handle the next ball, then advance again when you have time.",
            },
            {
              type: "p",
              text: "Do not keep charging forward simply because the kitchen line is your destination.",
            },
            { type: "h", text: "Recover after contact" },
            { type: "p", text: "After hitting:" },
            {
              type: "steps",
              items: [
                "Regain your balance.",
                "Bring the paddle back in front.",
                "Adjust your position for the next ball.",
                "Prepare again as your opponent strikes.",
              ],
            },
            {
              type: "p",
              text: "Recovery does not always mean returning to the same spot. Your next position depends on the rally and your partner, which we will explore in the next lesson.",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "You arrive late using tiny steps.",
                  "Cover distance first, then shorten your steps near the ball.",
                ],
                [
                  "You run past the contact point.",
                  "Begin slowing earlier and use adjustment steps.",
                ],
                [
                  "You stretch when there was time to move.",
                  "Recognise the direction earlier and move your feet towards the ball.",
                ],
                [
                  "Your split step feels like a big jump.",
                  "Make the movement smaller and lighter.",
                ],
                [
                  "You are still rushing forward when the opponent hits.",
                  "Regain a ready position before reacting to their shot.",
                ],
              ],
            },
          ],
          takeaway:
            "**Prepare. Move. Adjust. Hit with control. Recover.**\nBalance supports the shot; it is not a requirement to stand completely still.",
          practice: [
            "**React without a ball**\nStart in your ready position.\n\nHave a partner give a gentle clap, then point left or right. Use a small readiness movement around the clap, move towards the indicated side, and recover.\n\nBegin slowly. Keep the movement comfortable rather than jumping high.",
            "**Move, adjust, and return**\nAsk a partner to feed gentle balls a short distance to either side.\n\n1. Move towards the ball.\n2. Use smaller steps as you approach.\n3. Play a controlled return.\n4. Recover your balance and paddle position.\n\nIncrease the distance gradually. Judge success by comfortable contact and recovery—not by whether you stopped completely.",
          ],
          check: {
            prompt: "A ball is well away from you. Which approach is most useful?",
            options: [
              { id: "shuffle", label: "Use tiny shuffles for the entire distance." },
              {
                id: "cover",
                label: "Cover the distance, then use smaller steps to adjust near the ball.",
              },
              { id: "reach", label: "Keep your feet still and reach as far as possible." },
            ],
            answerId: "cover",
            explanation:
              "Larger movements help you travel; smaller adjustments help organise the contact.",
          },
          checks: [
            {
              prompt: "A ball is well away from you. Which approach is most useful?",
              options: [
                { id: "shuffle", label: "Use tiny shuffles for the entire distance." },
                {
                  id: "cover",
                  label: "Cover the distance, then use smaller steps to adjust near the ball.",
                },
                { id: "reach", label: "Keep your feet still and reach as far as possible." },
              ],
              answerId: "cover",
              explanation:
                "Larger movements help you travel; smaller adjustments help organise the contact.",
            },
            {
              prompt: "What is the purpose of a split step?",
              options: [
                { id: "jump", label: "To jump as high as possible." },
                {
                  id: "ready",
                  label: "To prepare your balance so you can react to the opponent’s shot.",
                },
                { id: "forehand", label: "To move automatically towards your forehand." },
              ],
              answerId: "ready",
              explanation:
                "It is a small readiness movement that helps you respond in the required direction.",
            },
            {
              prompt: "You are moving forward when an opponent prepares to hit. What should you prioritise?",
              options: [
                { id: "line", label: "Reaching the kitchen line at any cost." },
                {
                  id: "ready",
                  label: "Becoming balanced and ready, even if you are still in midcourt.",
                },
                { id: "back", label: "Automatically returning to the baseline." },
              ],
              answerId: "ready",
              explanation:
                "Prepare for the incoming ball first. Continue advancing when the rally gives you another opportunity.",
            },
          ],
          closing:
            "Move early, adjust your spacing, and control your momentum. Your goal is a manageable contact and a balanced recovery—not a rigid stop before every swing.",
        },
        {
          slug: "covering-the-court",
          title: "Covering the court",
          objective:
            "Adjust your position with your partner, protect the middle, and communicate who will play a shared ball.",
          summary:
            "In doubles, cover the court as a pair. Shift when your partner moves wide, protect the middle, and call early so one player takes a shared ball while the other prepares for the reply.",
          body: [
            { type: "p", text: "In doubles, you cover the court as a pair." },
            {
              type: "p",
              text: "Starting with one player on each side is useful, but the centreline is not a wall. During a rally, your responsibilities change with the ball, your opponents, and your partner.",
            },
            {
              type: "figure",
              src: "/covering-the-court.jpg",
              alt: "Three positions for a doubles pair. Alex and Sam share the court and protect the middle. When Sam moves wide, Alex shifts towards the gap and leaves Sam room. Then they reorganise together and read the next ball. Your half is a starting responsibility, not a fixed boundary.",
              wide: true,
              width: 1024,
              height: 612,
            },
            { type: "h", text: "Share the space" },
            {
              type: "p",
              text: "A useful starting arrangement is for each player to cover a sideline and share responsibility for the middle.",
            },
            {
              type: "p",
              text: "Avoid treating every ball on your side of the centreline as yours regardless of the situation. Your partner may sometimes have the more comfortable shot.",
            },
            {
              type: "p",
              text: "Equally, do not reach across a well-positioned partner simply because you prefer your forehand.",
            },
            {
              type: "p",
              text: "The aim is a controlled team response—not equal numbers of shots.",
            },
            { type: "h", text: "Shift when your partner moves wide" },
            {
              type: "p",
              text: "Imagine you are on the left and your partner moves towards the right sideline to reach a ball.",
            },
            {
              type: "p",
              text: "If you stay close to your own sideline, a large gap opens between you.",
            },
            {
              type: "p",
              text: "Shift towards the middle to help protect that gap. Leave your partner enough space to hit and recover.",
            },
            {
              type: "p",
              text: "You are adjusting the team’s coverage, not trying to stand beside them at the sideline.",
            },
            {
              type: "p",
              text: "As the rally changes, adjust again. You do not need to return automatically to your original spot after every shot.",
            },
            { type: "h", text: "Watch where the next shot can come from" },
            {
              type: "p",
              text: "Your opponents’ position helps you judge which spaces need protecting.",
            },
            {
              type: "p",
              text: "When an opponent is hitting from a wide position, the player facing them may need to protect the nearby sideline while their partner helps cover the middle.",
            },
            {
              type: "p",
              text: "You cannot defend every possible angle equally. Aim to cover the most immediate threats without crowding each other.",
            },
            {
              type: "p",
              text: "**Follow the developing rally rather than a fixed patch of court.**",
            },
            { type: "h", text: "Decide who takes the middle" },
            {
              type: "p",
              text: "Middle balls can cause two problems: both players swing, or both leave the ball.",
            },
            { type: "p", text: "Before playing, agree on a simple approach:" },
            {
              type: "bullets",
              items: [
                "The player with the clearer, more balanced contact takes the ball.",
                "Call early when responsibility is uncertain.",
                "Give a partner who has clearly claimed the shot room to play it.",
              ],
            },
            {
              type: "p",
              text: "“Forehand takes the middle” can help with genuinely shared balls, but it is not a rule. It also needs discussion when partners have different dominant hands.",
            },
            {
              type: "p",
              text: "Do not force an awkward forehand when your partner has an easy backhand.",
            },
            { type: "h", text: "Communicate early and clearly" },
            { type: "p", text: "Use short calls such as:" },
            {
              type: "bullets",
              items: [
                "**“Mine”** when taking responsibility.",
                "**“Yours”** when clearly leaving the ball to your partner.",
                "**“Switch”** when you need to exchange sides during the rally.",
              ],
            },
            {
              type: "p",
              text: "Make the call while there is still time to act. Avoid changing your mind at the last instant.",
            },
            {
              type: "p",
              text: "If a ball causes confusion, discuss it briefly afterwards: what did each player see, and what agreement would help next time?",
            },
            { type: "h", text: "Stay connected forwards and backwards" },
            {
              type: "p",
              text: "When both players have reached the kitchen line, aim to maintain a coordinated position rather than having one drift back without a reason.",
            },
            {
              type: "p",
              text: "You will not always be level. For example, the receiver begins farther back while their partner may already be near the kitchen.",
            },
            {
              type: "p",
              text: "Advance when your shot gives you time, and prepare before the opponents hit. Do not rush forward simply to line up beside your partner.",
            },
            { type: "h", text: "Common problems and adjustments" },
            {
              type: "table",
              headers: ["What happens?", "What to try"],
              rows: [
                [
                  "A large gap opens when your partner moves wide.",
                  "Shift towards the exposed middle.",
                ],
                [
                  "Both players crowd the same sideline.",
                  "Leave space and preserve coverage elsewhere.",
                ],
                ["Both swing at a middle ball.", "Agree responsibility and call earlier."],
                [
                  "Both leave the ball.",
                  "Make a clear claim rather than waiting for certainty.",
                ],
                [
                  "You take every middle forehand, even while stretched.",
                  "Let position and balance influence the decision.",
                ],
              ],
            },
          ],
          takeaway: "**Move as a pair. Protect the middle. Leave room. Call early.**",
          practice: [
            "**Shadow the shift**\nWithout a ball, stand with your partner just outside the kitchen line.\n\n1. One player moves a short distance towards their sideline.\n2. The other adjusts towards the exposed middle.\n3. Both settle into ready positions.\n4. Reverse the movement and repeat.\n\nKeep enough space to swing comfortably. There is no fixed number of steps—the adjustment depends on how far your partner moves.",
            "**Practise shared balls**\nAsk a third player to feed gentle balls towards the space between you.\n\nAgree who has priority, use an early call, and let one player complete the shot while the other prepares for the reply.\n\nStart cooperatively before adding scoring.",
          ],
          check: {
            prompt:
              "Your partner moves wide towards the right sideline. You are on the left. What is a useful adjustment?",
            options: [
              { id: "stay", label: "Stay beside your left sideline regardless of the gap." },
              {
                id: "shift",
                label: "Shift towards the exposed middle while leaving your partner room.",
              },
              { id: "beside", label: "Run all the way to the right sideline beside them." },
            ],
            answerId: "shift",
            explanation:
              "Help protect the gap without abandoning the rest of the court or crowding your partner.",
          },
          checks: [
            {
              prompt:
                "Your partner moves wide towards the right sideline. You are on the left. What is a useful adjustment?",
              options: [
                { id: "stay", label: "Stay beside your left sideline regardless of the gap." },
                {
                  id: "shift",
                  label: "Shift towards the exposed middle while leaving your partner room.",
                },
                { id: "beside", label: "Run all the way to the right sideline beside them." },
              ],
              answerId: "shift",
              explanation:
                "Help protect the gap without abandoning the rest of the court or crowding your partner.",
            },
            {
              prompt:
                "A middle ball offers your partner an easy backhand, but you would need to stretch for a forehand. Who should usually play it?",
              options: [
                { id: "you", label: "You, because forehands always take priority." },
                {
                  id: "partner",
                  label: "Your better-positioned partner, supported by a clear call.",
                },
                { id: "neither", label: "Neither player until the ball crosses the centreline." },
              ],
              answerId: "partner",
              explanation:
                "The more balanced contact is usually more useful than forcing a particular stroke.",
            },
            {
              prompt:
                "Your partner clearly calls “mine” early enough to play the ball comfortably. What should you do?",
              options: [
                { id: "space", label: "Give them space and prepare to cover the reply." },
                { id: "swing", label: "Swing as well in case they miss." },
                { id: "stop", label: "Stop watching the rally." },
              ],
              answerId: "space",
              explanation:
                "One player handles the shot; the other still has a role in the next phase of play.",
            },
          ],
          closing:
            "Your half is a starting responsibility, not a fixed boundary. Adjust with your partner, protect useful space, and make shared decisions clear.",
        },
      ],
    },
    {
      number: 6,
      title: "Simple strategy",
      summary: "Get to the kitchen, play as a pair, and choose the ball you can make.",
      lessons: [
        {
          slug: "play-to-the-kitchen",
          title: "Play to the kitchen",
          objective:
            "Recognise opportunities to advance towards the kitchen line and establish a balanced position with your partner.",
          summary:
            "Work towards a useful position just outside the kitchen line. Create time with a controlled shot, move forward in stages, and get ready before the opponents hit.",
          body: [
            {
              type: "p",
              text: "You have learned how to return, drop, move, and recover. Now put those skills together with a simple strategic aim:",
            },
            {
              type: "p",
              text: "**Work towards a useful position near the kitchen line—without sacrificing control on the way.**",
            },
            {
              type: "p",
              text: "Here, “at the kitchen” means just outside its boundary, ready to play.",
            },
            {
              type: "figure",
              src: "/play-to-the-kitchen.jpg",
              alt: "Play to the kitchen. The serving team uses a controlled serve. The receiving team uses a controlled return and advance. Both teams get to the kitchen line. Return, advance, get ready, then advance again.",
              wide: true,
              width: 1024,
              height: 576,
            },
            { type: "h", text: "Why move forward?" },
            {
              type: "p",
              text: "Near the kitchen line, you can intercept more balls before they bounce and give your opponents less time to respond.",
            },
            {
              type: "p",
              text: "You are also closer to short balls, reducing the distance you need to cover.",
            },
            {
              type: "p",
              text: "However, being near the net does not automatically give you control. You still need a ready paddle, balanced feet, and coordinated coverage with your partner.",
            },
            { type: "h", text: "When your team is receiving" },
            {
              type: "p",
              text: "The receiver starts far enough back to handle the serve. Their partner can already be positioned near the kitchen line.",
            },
            { type: "p", text: "After a controlled return:" },
            {
              type: "steps",
              items: [
                "Begin moving forward.",
                "Watch the opponents prepare their next shot.",
                "Regain a ready position as they hit.",
                "Continue towards the kitchen line when the ball gives you time.",
              ],
            },
            {
              type: "p",
              text: "A deep return with controlled pace can help you join your partner.",
            },
            {
              type: "p",
              text: "If the return leaves you little time, prepare where you are rather than rushing through the next shot.",
            },
            { type: "h", text: "When your team is serving" },
            {
              type: "p",
              text: "After serving, stay far enough back to handle a deep return. Your team must let that return bounce.",
            },
            {
              type: "p",
              text: "Once you play the next shot, judge whether it creates an opportunity to advance.",
            },
            {
              type: "p",
              text: "A useful drop can make your opponents contact the ball low. A controlled drive may produce a reply you can approach behind. Neither shot guarantees an easy route forward.",
            },
            {
              type: "p",
              text: "You may need several shots to reach the kitchen line.",
            },
            {
              type: "p",
              text: "**Advance behind the opportunity your shot creates—not simply because you have hit the ball.**",
            },
            { type: "h", text: "Move in manageable stages" },
            {
              type: "p",
              text: "The space between the baseline and kitchen line is often called the **transition zone**.",
            },
            {
              type: "p",
              text: "You are allowed to stop and play there. It is not a forbidden area.",
            },
            { type: "p", text: "A useful approach might look like:" },
            {
              type: "p",
              text: "**Controlled shot → advance → get ready → handle the reply → advance again.**",
            },
            {
              type: "p",
              text: "Avoid treating the whole journey as one uninterrupted run. Being balanced in midcourt is more useful than reaching the line while falling forwards.",
            },
            { type: "h", text: "Stay connected with your partner" },
            { type: "p", text: "Watch your partner as well as the ball." },
            {
              type: "p",
              text: "Avoid racing far ahead while they are stretched or defending. Equally, do not stay back automatically when there is a comfortable opportunity to move.",
            },
            {
              type: "p",
              text: "Aim to establish a coordinated position, with enough space between you to cover the court and protect the middle.",
            },
            {
              type: "p",
              text: "You will not always arrive together. The receiving team’s starting arrangement is one clear example.",
            },
            { type: "h", text: "Once you arrive" },
            {
              type: "p",
              text: "Settle just outside the kitchen line, leaving enough room to control your movement.",
            },
            {
              type: "bullets",
              items: [
                "Keep the paddle ready.",
                "Adjust with the ball and your partner.",
                "Step into the kitchen when needed to play a bounced ball.",
                "Re-establish both feet outside before a later volley.",
              ],
            },
            {
              type: "p",
              text: "You do not have to remain at the line regardless of what happens. A lob or a strong attacking ball may require you to reposition.",
            },
            { type: "h", text: "Read the opportunity" },
            {
              type: "table",
              headers: ["Situation", "Useful response"],
              rows: [
                [
                  "Your controlled return gives you time.",
                  "Advance towards your partner and prepare for the reply.",
                ],
                [
                  "Your drop leaves the opponents contacting the ball low.",
                  "Move forward while watching their response.",
                ],
                ["Your shot sits up for an attack.", "Get balanced and prepare to defend."],
                [
                  "You are still in midcourt when an opponent prepares to hit.",
                  "Become ready where you are.",
                ],
                [
                  "Both partners are established near the line.",
                  "Maintain balance and coordinated coverage.",
                ],
              ],
            },
          ],
          takeaway:
            "**Create time. Move forward. Get ready. Advance again when you can.**\nThe kitchen line is a destination, not a deadline.",
          practiceIntro:
            "With four players, begin each practice rally with a serve and return. Choose one team to observe:",
          practiceOrdered: true,
          practice: [
            "Did its shots create time to advance?",
            "Were both players ready when the opponents hit?",
            "Did they reach useful positions without crowding each other?",
          ],
          practiceNote:
            "Award a practice bonus when both players become balanced near the kitchen line and successfully handle the next ball.\n\nKeep this bonus separate from the normal score. Do not reward simply sprinting to the line.\n\nPractise as both the serving and receiving team.",
          check: {
            prompt:
              "You hit a controlled return and your partner is already near the kitchen line. What is your next aim?",
            options: [
              {
                id: "advance",
                label:
                  "Advance towards a useful position beside your partner, preparing for the reply.",
              },
              { id: "stay", label: "Stay at the baseline for the entire rally." },
              { id: "run", label: "Run forwards without watching the opponents." },
            ],
            answerId: "advance",
            explanation:
              "Use the time created by your return, while remaining ready for the next shot.",
          },
          checks: [
            {
              prompt:
                "You hit a controlled return and your partner is already near the kitchen line. What is your next aim?",
              options: [
                {
                  id: "advance",
                  label:
                    "Advance towards a useful position beside your partner, preparing for the reply.",
                },
                { id: "stay", label: "Stay at the baseline for the entire rally." },
                { id: "run", label: "Run forwards without watching the opponents." },
              ],
              answerId: "advance",
              explanation:
                "Use the time created by your return, while remaining ready for the next shot.",
            },
            {
              prompt:
                "Your team serves. The opponents send a deep return towards you. What must happen before you hit it?",
              options: [
                { id: "line", label: "You must reach the kitchen line." },
                { id: "bounce", label: "You must let the return bounce." },
                { id: "partner", label: "Your partner must volley it." },
              ],
              answerId: "bounce",
              explanation:
                "The serving team must allow the return to bounce. Moving forward must not prevent you from handling it.",
            },
            {
              prompt:
                "You hit a drop, but it rises into an easy attacking position. What should you prioritise?",
              options: [
                {
                  id: "sprint",
                  label: "Sprinting forwards because every drop requires an approach.",
                },
                { id: "ready", label: "Becoming balanced and preparing for the attack." },
                { id: "kitchen", label: "Entering the kitchen to block the next ball." },
              ],
              answerId: "ready",
              explanation:
                "Read the quality of your shot. A high drop may require defence before another opportunity to advance.",
            },
          ],
          closing:
            "Work towards the kitchen line through controlled shots and balanced movement. Receive and advance; serve, allow the return to bounce, then build your approach.",
        },
        {
          slug: "working-as-a-team",
          title: "Working as a team",
          objective:
            "Agree who takes an unclear middle ball, call it early, and cover the space your partner leaves.",
          summary:
            "Agree who takes unclear balls between you, call “mine” or “yours” early, and shift to cover the space your partner leaves when they move wide.",
          body: [
            {
              type: "p",
              text: "In doubles, you share responsibility for the court. Good teamwork helps you avoid two common mistakes: both players chasing the same ball, or both leaving it.",
            },
            {
              type: "figure",
              src: "/working-as-a-team.jpg",
              alt: "Two teamwork situations. Alex calls “Mine” and takes the ball while Sam stays ready. When Sam moves wide and calls “Mine,” Alex shifts to protect the middle and leaves Sam room.",
              wide: true,
              width: 1024,
              height: 616,
            },
            { type: "h", text: "Agree before you play" },
            {
              type: "p",
              text: "Before the first serve, discuss who will usually take balls between you.",
            },
            {
              type: "p",
              text: "“Forehand takes the middle” can be a useful starting point when one player has a forehand and the other has a backhand. But position matters too. A balanced player with an easy backhand may have a better shot than a partner stretching for a forehand.",
            },
            {
              type: "p",
              text: "If you both have forehands—or both have backhands—in the middle, make a clear agreement rather than guessing.",
            },
            { type: "h", text: "Call early, then give your partner space" },
            { type: "p", text: "Use short, clear calls:" },
            {
              type: "bullets",
              items: [
                "**“Mine”** means you are taking the ball.",
                "**“Yours”** means you are leaving it for your partner.",
              ],
            },
            {
              type: "p",
              text: "Call while there is still time for your partner to react, rather than as they start swinging. You do not need to call every obvious ball; focus on those either player could reasonably take.",
            },
            {
              type: "p",
              text: "Once your partner has clearly claimed the ball, give them room and prepare for the next shot.",
            },
            { type: "h", text: "Cover while your partner hits" },
            {
              type: "p",
              text: "Your job continues when your partner takes the ball.",
            },
            {
              type: "p",
              text: "If they are pulled wide, shift towards them enough to protect the middle. Avoid following so closely that you both cover the same space. As they recover, adjust together.",
            },
            {
              type: "p",
              text: "Between points, keep communication simple and supportive: “I’ll take that middle ball next time” is more useful than blaming each other for the last one.",
            },
          ],
          takeaway:
            "**Agree before the rally. Call early during it. Cover while your partner hits.**",
          practiceIntro: "With a partner and someone feeding balls:",
          practiceOrdered: true,
          practice: [
            "Agree who will usually take an unclear middle ball.",
            "Have the feeder send ten gentle balls between you, varying the placement.",
            "Call “mine” or “yours” early when ownership is unclear.",
            "The player leaving the ball gives their partner space and gets ready for the next shot.",
          ],
          practiceNote:
            "Then practise a few wide feeds. One player moves to the ball while the other adjusts to protect the middle.\n\nYour goal is **one committed hitter and one partner ready to cover**.",
          check: {
            prompt:
              "A ball travels between you and your partner. You both hesitate. What would help most?",
            options: [
              { id: "both", label: "Both swinging so someone reaches it." },
              {
                id: "agree",
                label: "Agreeing who takes unclear middle balls, then calling early.",
              },
              { id: "wait", label: "Waiting until the ball passes you." },
            ],
            answerId: "agree",
            explanation: "A shared plan and an early call reduce hesitation.",
          },
          checks: [
            {
              prompt:
                "A ball travels between you and your partner. You both hesitate. What would help most?",
              options: [
                { id: "both", label: "Both swinging so someone reaches it." },
                {
                  id: "agree",
                  label: "Agreeing who takes unclear middle balls, then calling early.",
                },
                { id: "wait", label: "Waiting until the ball passes you." },
              ],
              answerId: "agree",
              explanation: "A shared plan and an early call reduce hesitation.",
            },
            {
              prompt:
                "Your partner is balanced and ready to play a middle ball with their backhand. Taking it with your forehand would require a large stretch. What is the better choice?",
              options: [
                { id: "forehand", label: "Take it because forehands always have priority." },
                { id: "leave", label: "Leave it for your partner and prepare to cover." },
                { id: "both", label: "Both hit it." },
              ],
              answerId: "leave",
              explanation:
                "A forehand preference should not override a clearly better-positioned partner.",
            },
            {
              prompt: "Your partner moves wide and calls “mine.” What should you do?",
              options: [
                { id: "follow", label: "Follow them all the way to the same ball." },
                { id: "stay", label: "Stay fixed on your own sideline." },
                { id: "middle", label: "Give them room and adjust towards the middle." },
              ],
              answerId: "middle",
              explanation:
                "Your partner handles the ball while you help cover the space their movement leaves.",
            },
          ],
        },
        {
          slug: "choosing-safer-shots",
          title: "Choosing safer shots",
          objective:
            "Choose a controlled shot and a generous target when you are under pressure or unsure.",
          summary:
            "Choose a shot you can control, aim inside the lines, and match the shot to your balance, the ball height, and where your opponents are standing.",
          body: [
            {
              type: "p",
              text: "You do not need to win the rally with every shot. Often, the better choice is a ball you can control that gives you time to recover and makes your opponents play again.",
            },
            {
              type: "p",
              text: "Before you hit, notice three things: **your balance, the height of the ball at contact, and where your opponents are standing.**",
            },
            {
              type: "figure",
              src: "/choosing-safer-shots.jpg",
              alt: "Return the serve and aim deep, with room inside the lines. Then move forward towards the kitchen line. A deep, controlled return gives you time to move up and get ready at the kitchen line.",
              wide: true,
              width: 1024,
              height: 576,
            },
            { type: "h", text: "Give yourself room" },
            {
              type: "p",
              text: "Aim inside the lines rather than directly at them. A bigger target allows for small mistakes in timing or direction.",
            },
            {
              type: "p",
              text: "Give the ball enough height to clear the net, too. But match the height to the shot: a soft dink needs a gentle arc, while a high, floating ball near the kitchen may give your opponents an easy attack.",
            },
            {
              type: "p",
              text: "**Margin means room for error—not simply hitting higher.**",
            },
            { type: "h", text: "Choose a shot that fits the situation" },
            {
              type: "bullets",
              items: [
                "**On the serve or return:** aim deep with space inside the baseline and sidelines.",
                "**At the kitchen with a low ball:** a controlled dink is usually a better starting choice than forcing a hard attack.",
                "**In the backcourt against opponents at the kitchen:** consider a soft drop into their kitchen rather than assuming every shot should go deep.",
                "**When stretched or off balance:** reduce the ambition of your shot. Focus on getting the ball back with control and recovering your position.",
              ],
            },
            {
              type: "p",
              text: "Near the kitchen, a crosscourt dink gives you more distance to work with than a straight dink. Aim comfortably inside the kitchen rather than trying to clip the sideline. If reaching crosscourt would require a difficult last-second change, use the simpler direction you can control.",
            },
            { type: "h", text: "Be patient with low balls" },
            {
              type: "p",
              text: "When you contact the ball below net height, it must travel upwards to clear the net. Adding too much pace can send it long or leave an easy ball for your opponents.",
            },
            {
              type: "p",
              text: "For now, build the habit of playing these balls softly. Look for a higher ball you can reach in balance before trying to attack.",
            },
          ],
          takeaway:
            "**Choose a shot you can control. Leave room inside the lines. Make your opponents play another ball.**",
          practiceIntro: "With a partner:",
          practiceOrdered: true,
          practice: [
            "Start a cooperative crosscourt dink rally.",
            "Aim into a generous area inside the kitchen, away from the sideline.",
            "Try to make eight controlled shots together.",
            "If you are stretched or late, play a simple soft reply rather than forcing an angle.",
          ],
          practiceNote:
            "Then practise five serves and five returns, aiming deep with a clear margin inside the baseline.\n\nCount controlled landings—not just balls that scrape a line.",
          check: {
            prompt:
              "You are at the kitchen and will contact a bounced ball below net height. Which is the safer starting choice?",
            options: [
              { id: "force", label: "Force a hard shot at your opponent." },
              { id: "dink", label: "Play a controlled dink into their kitchen." },
              { id: "sideline", label: "Aim for the sideline with your fastest swing." },
            ],
            answerId: "dink",
            explanation:
              "A soft reply helps you keep the ball in play without forcing an attack from low contact.",
          },
          checks: [
            {
              prompt:
                "You are at the kitchen and will contact a bounced ball below net height. Which is the safer starting choice?",
              options: [
                { id: "force", label: "Force a hard shot at your opponent." },
                { id: "dink", label: "Play a controlled dink into their kitchen." },
                { id: "sideline", label: "Aim for the sideline with your fastest swing." },
              ],
              answerId: "dink",
              explanation:
                "A soft reply helps you keep the ball in play without forcing an attack from low contact.",
            },
            {
              prompt:
                "You are at the baseline and both opponents are established at the kitchen. Must your next shot go deep?",
              options: [
                {
                  id: "deep",
                  label: "Yes. Every baseline shot should land near the opposite baseline.",
                },
                {
                  id: "drop",
                  label: "No. A controlled drop into their kitchen can help you move forward.",
                },
                { id: "lob", label: "No. You should always attempt a lob." },
              ],
              answerId: "drop",
              explanation:
                "Choose the shot for the situation. A drop can make opponents contact the ball low and create an opportunity to advance.",
            },
            {
              prompt: "What does choosing a bigger target mean?",
              options: [
                { id: "inside", label: "Aiming comfortably inside the lines." },
                { id: "high", label: "Hitting every ball as high as possible." },
                { id: "harder", label: "Swinging harder so the ball reaches the target sooner." },
              ],
              answerId: "inside",
              explanation: "Leaving space around your target makes small errors less costly.",
            },
          ],
        },
      ],
    },
    {
      number: 7,
      title: "Practice",
      summary: "A short plan and a few drills you can repeat.",
      lessons: [
        {
          slug: "a-simple-practice-plan",
          title: "A simple practice plan",
          objective:
            "Follow a 20-minute practice session with a partner and record one useful result.",
          summary:
            "Use four five-minute blocks: warm up, serve, return, then play with one focus. Finish by writing down one result and one next step.",
          body: [
            {
              type: "p",
              text: "You do not need to practise everything in one session. A simple routine helps you spend less time deciding what to do and more time learning.",
            },
            {
              type: "p",
              text: "Use four five-minute blocks: **warm up, practise serving, practise returning, then play with a purpose.**",
            },
            {
              type: "p",
              text: "Bring a partner, a few balls, and a timer.",
            },
            {
              type: "figure",
              src: "/a-simple-practice-plan.jpg",
              alt: "A 20-minute practice plan: warm up, serve, return, and play with one focus, then record one result such as serves in and a next step.",
              wide: true,
              width: 1024,
              height: 682,
            },
            { type: "h", text: "Minutes 0–5: Move and find your touch" },
            {
              type: "p",
              text: "Start with gentle walking, side steps, and comfortable paddle swings. Gradually increase your movement before hitting harder shots.",
            },
            {
              type: "p",
              text: "Then dink cooperatively with your partner. Use small swings and generous targets inside the kitchen. Aim to keep the ball going rather than beat each other.",
            },
            {
              type: "p",
              text: "**Focus:** Comfortable movement and controlled contact.",
            },
            { type: "h", text: "Minutes 5–10: Focus on the serve" },
            {
              type: "p",
              text: "One player serves while the other receives. Change roles halfway through.",
            },
            {
              type: "p",
              text: "Aim diagonally into the correct service court, leaving room inside the baseline and sidelines. Let the receiver collect or return the ball gently, then reset.",
            },
            {
              type: "p",
              text: "Count how many of your first ten serves land legally in the service court. If you hit fewer than ten, record the number you made out of the number attempted.",
            },
            {
              type: "p",
              text: "**Focus:** A repeatable serve, with control before speed.",
            },
            { type: "h", text: "Minutes 10–15: Focus on the return" },
            {
              type: "p",
              text: "Keep the same setup, but now the receiver’s shot is the focus. Change roles halfway through.",
            },
            {
              type: "p",
              text: "Let the serve bounce, return towards a generous deep target, then move forward. The server lets the return bounce and catches or collects it before you reset.",
            },
            {
              type: "p",
              text: "If you add another shot, get balanced before your partner hits. Reaching the kitchen line is not a race.",
            },
            {
              type: "p",
              text: "**Focus:** A controlled return followed by purposeful movement.",
            },
            { type: "h", text: "Minutes 15–20: Play with one purpose" },
            {
              type: "p",
              text: "Play short rallies using a legal serve and the two-bounce rule. With two players, use a straight-ahead half-court practice area after the diagonal serve and return. With four, play doubles.",
            },
            { type: "p", text: "Choose just one focus:" },
            {
              type: "bullets",
              items: [
                "Keep low balls controlled.",
                "Aim comfortably inside the lines.",
                "Get balanced before the opponent hits.",
              ],
            },
            {
              type: "p",
              text: "Pause briefly between rallies to check that focus. You do not need to finish a full game.",
            },
            {
              type: "p",
              text: "**Focus:** Bring one practice habit into play.",
            },
            { type: "h", text: "Record one result" },
            {
              type: "p",
              text: "At the end, write down one number and one next step.",
            },
            { type: "p", text: "For example:" },
            {
              type: "p",
              text: "**Today:** 7 out of 10 serves landed in.",
            },
            {
              type: "p",
              text: "**Next time:** Use the same swing and aim farther inside the sideline.",
            },
            {
              type: "p",
              text: "Keep the measure consistent across sessions so you can compare your own progress.",
            },
          ],
          takeaway:
            "**One routine. One focus at a time. One result to take into the next session.**\n\nTwenty minutes is a useful starting point, not a limit. If you have more time, repeat the block that needs the most work.",
          practice: [
            "Set a timer for four five-minute blocks.",
            "Follow the plan with a partner.",
            "Change serving and receiving roles halfway through each relevant block.",
            "Finish by recording one result and choosing your next focus.",
          ],
          check: {
            prompt: "What should you do at the start of this session?",
            options: [
              { id: "hard", label: "Immediately hit your hardest serves." },
              { id: "gentle", label: "Begin with gentle movement, then cooperative dinks." },
              { id: "game", label: "Play a game before deciding what to practise." },
            ],
            answerId: "gentle",
            explanation:
              "Start gradually, then find your touch before moving into serves, returns, and rallies.",
          },
          checks: [
            {
              prompt: "What should you do at the start of this session?",
              options: [
                { id: "hard", label: "Immediately hit your hardest serves." },
                { id: "gentle", label: "Begin with gentle movement, then cooperative dinks." },
                { id: "game", label: "Play a game before deciding what to practise." },
              ],
              answerId: "gentle",
              explanation:
                "Start gradually, then find your touch before moving into serves, returns, and rallies.",
            },
            {
              prompt: "During the return block, what are you practising?",
              options: [
                {
                  id: "controlled",
                  label: "A controlled return followed by movement into position.",
                },
                { id: "win", label: "Winning the rally with every return." },
                { id: "run", label: "Running to the kitchen regardless of your shot." },
              ],
              answerId: "controlled",
              explanation:
                "The return should help you move forward, while leaving time to prepare for the next ball.",
            },
            {
              prompt: "Which note is most useful after practice?",
              options: [
                { id: "everything", label: "“I need to improve everything.”" },
                { id: "time", label: "“I practised for twenty minutes.”" },
                {
                  id: "specific",
                  label:
                    "“Seven of ten serves landed in; next time I’ll leave more room inside the sideline.”",
                },
              ],
              answerId: "specific",
              explanation:
                "A specific result and a clear next step make the next session easier to plan.",
            },
          ],
        },
        {
          slug: "drills-you-can-repeat",
          title: "Drills you can repeat",
          objective:
            "Set up a simple drill, count successful attempts, and record a result you can compare next time.",
          summary:
            "Repeat a serve, dink, or return drill with the same setup and target, count your successful attempts, and write down one next step.",
          body: [
            {
              type: "p",
              text: "A useful drill gives you something specific to practise. Decide where to start, what you are aiming for, and what counts as success.",
            },
            {
              type: "p",
              text: "Begin cooperatively. Your partner should help you repeat the skill rather than try to beat you.",
            },
            {
              type: "figure",
              src: "/drills-you-can-repeat.jpg",
              alt: "Three counted drills: ten serves to the same target, twenty cooperative dinks, and ten returns where you also record whether you were ready in time.",
              wide: true,
              width: 1024,
              height: 612,
            },
            { type: "h", text: "Drill 1: Ten serves" },
            {
              type: "p",
              text: "**You need:** A paddle, balls, and access to a court and net. A partner is helpful but optional.",
            },
            {
              type: "p",
              text: "**Setup:** Start behind the baseline on the right-hand side. Aim diagonally into the correct service court.",
            },
            {
              type: "p",
              text: "**Task:** Hit ten serves using your usual serving technique. Choose a generous target inside the service court.",
            },
            {
              type: "p",
              text: "**Count:** Record how many serves land legally in the correct service court, out of ten.",
            },
            {
              type: "p",
              text: "**Repeat:** Try another set from the left-hand side. Record the two results separately.",
            },
            {
              type: "p",
              text: "**Make it easier:** Focus on landing anywhere in the correct service court.",
            },
            {
              type: "p",
              text: "**Make it harder:** Aim into a smaller, deep target area with room inside the lines. Record target hits separately from legal serves.",
            },
            { type: "h", text: "Drill 2: Twenty crosscourt dinks" },
            {
              type: "p",
              text: "**You need:** A partner, paddles, and a ball.",
            },
            {
              type: "p",
              text: "**Setup:** Stand diagonally opposite each other near your kitchen lines. Begin with a gentle feed.",
            },
            {
              type: "p",
              text: "**Task:** Dink cooperatively into each other’s kitchen. Keep your swings small and aim away from the sidelines. Restart with a gentle feed whenever the rally ends.",
            },
            {
              type: "p",
              text: "**Count:** Each player counts their own twenty dink attempts and records how many land in the opposite kitchen. Do not count the starting feeds.",
            },
            {
              type: "p",
              text: "**Repeat:** Change diagonals and try again.",
            },
            {
              type: "p",
              text: "**Make it easier:** Use a large target and slower feeds.",
            },
            {
              type: "p",
              text: "**Make it harder:** Count your longest shared streak of successful dinks. Keep this separate from your score out of twenty.",
            },
            {
              type: "p",
              text: "You may step into the kitchen to play a bounced ball. Recover to a ready position afterwards.",
            },
            { type: "h", text: "Drill 3: Return and get ready" },
            {
              type: "p",
              text: "**You need:** A partner, paddles, and a few balls.",
            },
            {
              type: "p",
              text: "**Setup:** One player serves legally. The receiver starts in a position that allows the serve to bounce before contact.",
            },
            {
              type: "p",
              text: "**Task:** Return towards a generous deep target, then move forward. The server lets the return bounce and plays a controlled third shot. The receiver gets balanced before that shot, then tries to play the next ball.",
            },
            {
              type: "p",
              text: "**Count:** Across ten attempts, record how often you:",
            },
            {
              type: "bullets",
              items: [
                "Land the return inside your chosen target.",
                "Get balanced before the server contacts the next shot.",
              ],
            },
            {
              type: "p",
              text: "Record these as two separate scores out of ten. Change roles after the set.",
            },
            {
              type: "p",
              text: "**Make it easier:** Begin with gentle, predictable serves.",
            },
            {
              type: "p",
              text: "**Make it harder:** Vary the serve’s placement while keeping it manageable.",
            },
            {
              type: "p",
              text: "Reaching the kitchen line is not the measure. If you cannot get there in time, get ready where you are.",
            },
            { type: "h", text: "Record enough to repeat it" },
            {
              type: "p",
              text: "Keep a short note of the drill, conditions, and result.",
            },
            { type: "p", text: "For example:" },
            { type: "p", text: "**Drill:** Ten serves from the right." },
            { type: "p", text: "**Target:** Anywhere in the correct service court." },
            { type: "p", text: "**Result:** 7/10 legal serves." },
            {
              type: "p",
              text: "**Next focus:** Keep the same swing and leave more room inside the sideline.",
            },
            {
              type: "p",
              text: "Use the same setup and success criteria when comparing results. If you shrink the target, note the change.",
            },
            {
              type: "p",
              text: "You will have better and worse days. Look for a pattern across several sessions rather than expecting a new best every time.",
            },
          ],
          takeaway:
            "**Same setup. Clear target. Counted attempts. One next step.**\n\nThe number helps you notice progress. The purpose is still to build a skill you can use during play.",
          practice: [
            "Choose one drill and complete a counted set.",
            "Record your result and one thing to work on.",
            "Repeat it in another session using the same target.",
            "After practising, play a few rallies and try to use that skill.",
          ],
          check: {
            prompt: "Which approach makes serve results easiest to compare?",
            options: [
              { id: "change", label: "Change the target after every serve." },
              {
                id: "same",
                label:
                  "Hit ten serves from the same side towards the same target and record the result.",
              },
              { id: "stop", label: "Stop as soon as you hit one good serve." },
            ],
            answerId: "same",
            explanation: "A consistent setup makes the result more useful.",
          },
          checks: [
            {
              prompt: "Which approach makes serve results easiest to compare?",
              options: [
                { id: "change", label: "Change the target after every serve." },
                {
                  id: "same",
                  label:
                    "Hit ten serves from the same side towards the same target and record the result.",
                },
                { id: "stop", label: "Stop as soon as you hit one good serve." },
              ],
              answerId: "same",
              explanation: "A consistent setup makes the result more useful.",
            },
            {
              prompt: "You scored 8/10 last session and 6/10 today. What does that tell you?",
              options: [
                { id: "worse", label: "Your technique has definitely become worse." },
                { id: "broken", label: "The drill no longer works." },
                {
                  id: "vary",
                  label:
                    "Results vary; compare several similar sessions before drawing a conclusion.",
                },
              ],
              answerId: "vary",
              explanation: "One session is only part of the picture.",
            },
            {
              prompt:
                "During the return drill, you cannot reach the kitchen before the server hits the next shot. What should you do?",
              options: [
                { id: "run", label: "Keep running through their contact." },
                { id: "ready", label: "Get balanced where you are and prepare for the ball." },
                { id: "stop", label: "Stop the rally because the attempt no longer matters." },
              ],
              answerId: "ready",
              explanation: "Being ready for the next shot matters more than reaching a line.",
            },
          ],
        },
      ],
    },
    {
      number: 8,
      title: "Ready to play",
      summary: "Find a suitable game, play with good habits, and choose what to improve next.",
      lessons: [
        {
          slug: "play-your-first-games",
          title: "Play your first games",
          objective:
            "Join a beginner session, follow basic court etiquette, and practise three useful habits.",
          summary:
            "Find a beginner session, introduce yourself honestly, and take three habits into the game: call the score, respect the kitchen, and get ready for the next shot.",
          body: [
            {
              type: "p",
              text: "You do not need to master every shot before joining a game. Start with a group that welcomes beginners, explain your experience, and give yourself room to learn.",
            },
            {
              type: "p",
              text: "Your first session is an opportunity to put the foundations into practice—not a test you have to pass.",
            },
            {
              type: "figure",
              src: "/play-your-first-games.jpg",
              alt: "Three steps for a first session: choose beginner play, introduce yourself as new to pickleball, and play with the habits of calling the score, respecting the kitchen, and getting ready.",
              wide: true,
              width: 1024,
              height: 599,
            },
            { type: "h", text: "Find a suitable session" },
            {
              type: "p",
              text: "Look for sessions described as **beginner**, **introductory**, **social**, or **new-player open play** at a club, sports centre, or community court.",
            },
            {
              type: "p",
              text: "Check the description before booking. “Open play” can describe different arrangements, so ask the organiser if the session suits someone playing their first games.",
            },
            { type: "p", text: "You can say:" },
            {
              type: "p",
              text: "**“I’m new to pickleball. I understand the basics, but I’m still learning scoring and positioning. Is this a suitable session?”**",
            },
            {
              type: "p",
              text: "Ask whether you need to book, bring equipment, or arrive early for an introduction.",
            },
            { type: "h", text: "Choose the group before the rating" },
            {
              type: "p",
              text: "You do not need an official rating for many beginner sessions, although individual organisers may set entry requirements.",
            },
            {
              type: "p",
              text: "Describe what you can currently do rather than guessing a number:",
            },
            {
              type: "bullets",
              items: [
                "Are you playing your first games?",
                "Can you serve and return consistently?",
                "Can you keep score without help?",
                "Are you comfortable rallying at the kitchen?",
              ],
            },
            {
              type: "p",
              text: "Previous tennis or padel experience may help, but pickleball’s scoring, kitchen rules, and positioning still take practice.",
            },
            { type: "h", text: "Before the first serve" },
            {
              type: "p",
              text: "Introduce yourself to your partner and opponents. Let them know you are learning.",
            },
            {
              type: "p",
              text: "Confirm the scoring format and ask how players rotate between games. With your partner, agree who will usually take unclear middle balls.",
            },
            {
              type: "p",
              text: "If you forget the score or your serving position, ask before serving. A brief check is better than guessing.",
            },
            { type: "h", text: "Follow basic court etiquette" },
            { type: "h", level: 3, text: "Make honest line calls" },
            {
              type: "p",
              text: "Call balls on your side of the court. Only call a ball out when you clearly see that it landed out.",
            },
            {
              type: "p",
              text: "If you are unsure, give your opponents the benefit of the doubt and treat the ball as in. Uncertainty alone is not a reason to replay the rally.",
            },
            { type: "h", level: 3, text: "Respect other games" },
            {
              type: "p",
              text: "Wait for a break in play before crossing behind another court or returning a loose ball.",
            },
            {
              type: "p",
              text: "If a stray ball creates a danger, warn the players immediately by calling **“Ball!”** Do not run into an active game to retrieve it.",
            },
            { type: "h", level: 3, text: "Be a supportive partner" },
            {
              type: "p",
              text: "Use short, helpful communication during rallies and encouragement between points.",
            },
            {
              type: "p",
              text: "Avoid giving unsolicited technical advice. Ask before offering coaching, and give your partner space to learn.",
            },
            { type: "h", level: 3, text: "Follow the rotation" },
            {
              type: "p",
              text: "Use the venue’s queue or paddle system and leave the court when your turn ends. Thank the other players and welcome the next group.",
            },
            { type: "h", text: "Take three habits into your game" },
            { type: "p", text: "Keep your focus manageable:" },
            {
              type: "steps",
              items: [
                "**Call the score clearly before you serve.**",
                "**Respect the kitchen:** no volley while touching it or its line, and no momentum carrying you in after a volley.",
                "**Get ready for the next shot:** paddle in front, balanced when possible, and aware of your partner.",
              ],
            },
            {
              type: "p",
              text: "You will still make mistakes. Notice one thing to practise rather than trying to fix everything during the game.",
            },
          ],
          takeaway:
            "**Start with a welcoming group. Ask when unsure. Be someone others enjoy playing with.**",
          practice: [
            "Find one suitable beginner session and check its booking requirements.",
            "Tell your partner you are learning before the first game.",
            "Use the three habits during play.",
            "Afterwards, write down one thing that went well and one thing to practise.",
          ],
          check: {
            prompt: "You are new and about to join a group. What is the most useful introduction?",
            options: [
              { id: "rating", label: "Guess a high rating so they let you play." },
              {
                id: "explain",
                label: "Explain that you are new and ask whether the session is suitable.",
              },
              { id: "coach", label: "Offer to coach the group." },
            ],
            answerId: "explain",
            explanation:
              "An honest description helps the organiser and players welcome you into an appropriate game.",
          },
          checks: [
            {
              prompt: "You are new and about to join a group. What is the most useful introduction?",
              options: [
                { id: "rating", label: "Guess a high rating so they let you play." },
                {
                  id: "explain",
                  label: "Explain that you are new and ask whether the session is suitable.",
                },
                { id: "coach", label: "Offer to coach the group." },
              ],
              answerId: "explain",
              explanation:
                "An honest description helps the organiser and players welcome you into an appropriate game.",
            },
            {
              prompt:
                "A ball lands close to the sideline on your side, and you cannot tell whether it was out. What should you do?",
              options: [
                { id: "out", label: "Call it out because it was close." },
                { id: "replay", label: "Automatically replay the rally." },
                { id: "in", label: "Treat it as in." },
              ],
              answerId: "in",
              explanation:
                "Only call a ball out when you clearly see it out. Doubt goes to your opponents.",
            },
            {
              prompt:
                "Your ball rolls into another game and towards a player’s feet. What should you do?",
              options: [
                { id: "warn", label: "Immediately warn the players by calling “Ball!”" },
                { id: "run", label: "Run onto their court without warning." },
                { id: "quiet", label: "Stay quiet until the rally finishes." },
              ],
              answerId: "warn",
              explanation:
                "Warn players promptly when a loose ball creates a danger, then retrieve it when it is safe.",
            },
          ],
        },
        {
          slug: "check-your-foundations",
          title: "Check your foundations and choose your next goal",
          objective:
            "Review your understanding and on-court skills, then choose one goal for your next three practices.",
          summary:
            "Review what you can explain and what you can do, then choose one focus, a drill, a measure, and three practices.",
          body: [
            {
              type: "p",
              text: "You have covered the foundations: how pickleball works, its main rules, essential shots, positioning, simple strategy, and purposeful practice.",
            },
            {
              type: "p",
              text: "You do not need to perform everything consistently yet. Understanding a skill and using it during a game are different stages of learning.",
            },
            {
              type: "p",
              text: "Use this check to decide what deserves your attention next.",
            },
            {
              type: "figure",
              src: "/check-your-foundations.jpg",
              alt: "Three steps: check your foundations, choose one focus such as a reliable serve, and plan three practices. An example plan is ten serves from each side before the next three sessions.",
              wide: true,
              width: 1024,
              height: 682,
            },
            { type: "h", text: "Check what you understand" },
            { type: "p", text: "For each statement, choose:" },
            {
              type: "bullets",
              items: [
                "**Confident:** I can explain it without help.",
                "**Still learning:** I understand some of it but need a reminder.",
                "**Revisit:** I need to return to the lesson.",
              ],
            },
            {
              type: "table",
              headers: ["Topic", "Can you explain it?"],
              rows: [
                [
                  "Court",
                  "Identify the baseline, sidelines, centreline, net, and both kitchens.",
                ],
                [
                  "Two-bounce rule",
                  "Explain which two shots must bounce before a volley is allowed.",
                ],
                [
                  "Kitchen",
                  "Explain when you may enter it and how it affects volleys and momentum.",
                ],
                ["Scoring", "Call the three numbers used in traditional doubles scoring."],
                [
                  "Serving order",
                  "Work out who serves next and where they stand in a simple game situation.",
                ],
                [
                  "Faults and line calls",
                  "Recognise common faults and explain what to do when you are unsure whether a ball was out.",
                ],
              ],
            },
            {
              type: "p",
              text: "If you are unsure, revisit the relevant lesson and explain it aloud in your own words.",
            },
            { type: "h", text: "Check what you can do" },
            { type: "p", text: "For each statement, choose:" },
            {
              type: "bullets",
              items: [
                "**Usually:** I can do this in cooperative practice and sometimes in games.",
                "**Sometimes:** I can do it, but it is not reliable yet.",
                "**Not yet:** I need more guidance or practice.",
              ],
            },
            {
              type: "table",
              headers: ["Skill", "What to look for"],
              rows: [
                ["Serve", "Land a legal diagonal serve in the correct service court."],
                [
                  "Return",
                  "Let the serve bounce, return with control, and prepare for the next shot.",
                ],
                ["Drive", "Hit a controlled forehand or backhand after a bounce."],
                ["Dink", "Use a small swing to send a soft ball into the opposite kitchen."],
                [
                  "Volley",
                  "Contact the ball before a bounce without touching the kitchen or its line, or being carried in by momentum.",
                ],
                [
                  "Ready position",
                  "Bring the paddle in front and get balanced for the opponent’s shot.",
                ],
                [
                  "Movement",
                  "Adjust your feet and stay as balanced as possible at contact.",
                ],
                [
                  "Teamwork",
                  "Call unclear balls early and adjust your position with your partner.",
                ],
                [
                  "Shot choice",
                  "Choose a manageable target rather than forcing a difficult winner.",
                ],
              ],
            },
            {
              type: "p",
              text: "Rate your forehand and backhand separately if one needs more work.",
            },
            {
              type: "p",
              text: "These are personal checkpoints, not an official rating or a requirement for joining beginner play.",
            },
            { type: "h", text: "Choose one useful goal" },
            {
              type: "p",
              text: "Pick a gap that regularly interrupts your games.",
            },
            {
              type: "p",
              text: "If your serve rarely lands in, start there. If you can rally but often forget the score, focus on scoring. If you know the shots but keep hitting while off balance, work on preparation and movement.",
            },
            { type: "p", text: "Turn the gap into a specific action:" },
            {
              type: "table",
              headers: ["Broad intention", "Clear practice goal"],
              rows: [
                [
                  "“Improve my serve.”",
                  "Record ten serves from each side using the same generous target.",
                ],
                [
                  "“Get better at dinking.”",
                  "Complete twenty cooperative crosscourt dink attempts and count kitchen landings.",
                ],
                [
                  "“Move forward better.”",
                  "Practise ten returns and count how often I get balanced before the next shot.",
                ],
                [
                  "“Understand scoring.”",
                  "Call the full score and identify the next server during a short practice game.",
                ],
              ],
            },
            {
              type: "p",
              text: "Choose a manageable target based on your starting point. You can increase the difficulty later.",
            },
            { type: "h", text: "Make a plan for three practices" },
            { type: "p", text: "Write down:" },
            { type: "p", text: "**My focus:** What am I working on?" },
            { type: "p", text: "**My drill:** What will I repeat?" },
            { type: "p", text: "**My measure:** What will I count or check?" },
            { type: "p", text: "**My practice times:** When will I do it?" },
            { type: "p", text: "For example:" },
            { type: "p", text: "**My focus:** A more reliable serve." },
            {
              type: "p",
              text: "**My drill:** Ten serves from each side, aiming anywhere in the correct service court.",
            },
            {
              type: "p",
              text: "**My measure:** Legal serves out of ten, recorded separately for each side.",
            },
            {
              type: "p",
              text: "**My practice times:** Before my next three beginner sessions.",
            },
            {
              type: "p",
              text: "After three practices, review your results. Keep the same focus if it still needs attention, adjust the drill if necessary, or choose your next goal.",
            },
            { type: "h", text: "Take the skill into a game" },
            {
              type: "p",
              text: "Finish practice with a few rallies or a beginner game.",
            },
            {
              type: "p",
              text: "Notice whether you can use the skill when the ball and your opponents are less predictable. It may feel harder than the drill. That helps you identify the next part to practise.",
            },
          ],
          takeaway:
            "**Choose one focus. Practise it deliberately. Review it after three sessions.**\n\nYou can keep enjoying games while developing your skills. You do not have to complete every checkpoint before you play.",
          practice: [
            "Complete both self-checks honestly.",
            "Choose one skill or knowledge gap.",
            "Write a plan for your next three practices.",
            "Record a starting result and compare it with later sessions.",
            "Try the skill during play and note what changes.",
          ],
          check: {
            prompt:
              "You can keep a cooperative dink rally going, but many of your serves miss. Which next goal is most useful?",
            options: [
              { id: "advanced", label: "Add several advanced shots at once." },
              {
                id: "serve",
                label: "Build a more reliable legal serve using a repeatable drill.",
              },
              { id: "matches", label: "Stop practising and only play matches." },
            ],
            answerId: "serve",
            explanation:
              "Focus on the skill that is regularly preventing you from starting rallies. Establish consistency before shrinking the target or adding pace.",
          },
          checks: [
            {
              prompt:
                "You can keep a cooperative dink rally going, but many of your serves miss. Which next goal is most useful?",
              options: [
                { id: "advanced", label: "Add several advanced shots at once." },
                {
                  id: "serve",
                  label: "Build a more reliable legal serve using a repeatable drill.",
                },
                { id: "matches", label: "Stop practising and only play matches." },
              ],
              answerId: "serve",
              explanation:
                "Focus on the skill that is regularly preventing you from starting rallies. Establish consistency before shrinking the target or adding pace.",
            },
            {
              prompt: "Which goal is easiest to practise and review?",
              options: [
                { id: "better", label: "“Become a much better player.”" },
                { id: "never", label: "“Never make another mistake.”" },
                {
                  id: "record",
                  label: "“Record ten serves from each side before my next three sessions.”",
                },
              ],
              answerId: "record",
              explanation: "It gives you a clear action, a measure, and a time to review.",
            },
            {
              prompt:
                "You can perform a shot in a drill but struggle to use it during games. What does that mean?",
              options: [
                {
                  id: "apply",
                  label: "You need practice applying it to less predictable situations.",
                },
                { id: "pointless", label: "The drill was pointless." },
                {
                  id: "harder",
                  label: "You should immediately replace it with a harder shot.",
                },
              ],
              answerId: "apply",
              explanation:
                "Cooperative practice builds familiarity. Games add decisions, movement, and pressure that also need practice.",
            },
          ],
          ending: {
            title: "You have reached the end of Pickleball Foundations",
            paragraphs: [
              "Return to any lesson when you need a reminder. Keep using the practice plan, join suitable games, and build your skills one focus at a time.",
              "**Your next step: choose your goal and schedule your next practice.**",
            ],
          },
        },
      ],
    },
  ] satisfies Module[],
};

export const courseOutline = course.modules.map((courseModule) => ({
  number: courseModule.number,
  title: courseModule.title,
  summary: courseModule.summary,
  lessons: courseModule.lessons.map((lesson) => ({
    slug: lesson.slug,
    title: lesson.title,
  })),
}));

export type LessonRef = Lesson & {
  moduleNumber: number;
  moduleTitle: string;
  index: number;
};

export function allLessons(): LessonRef[] {
  const lessons: LessonRef[] = [];
  for (const courseModule of course.modules) {
    for (const lesson of courseModule.lessons) {
      lessons.push({
        ...lesson,
        moduleNumber: courseModule.number,
        moduleTitle: courseModule.title,
        index: lessons.length,
      });
    }
  }
  return lessons;
}

export function getLesson(slug: string) {
  return allLessons().find((lesson) => lesson.slug === slug);
}

export function neighbors(slug: string) {
  const lessons = allLessons();
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined,
    index,
    total: lessons.length,
  };
}

export const sampleQuiz = {
  questionNumber: 3,
  totalQuestions: 8,
  prompt: "Where should you move after your return?",
  options: [
    { id: "baseline", label: "Stay back near the baseline." },
    {
      id: "kitchen",
      label: "Move forward to the kitchen (non-volley zone) with your partner.",
      correct: true,
    },
    { id: "middle", label: "Move to the middle of the court and wait." },
  ],
  correctTitle: "Think about your next position.",
  correctBody:
    "After a good return, your goal is usually to move forward and establish a position at the kitchen with your partner. This puts you in a stronger, more offensive position for the next shots.",
  retryTitle: "Not the strongest choice.",
  retryBody:
    "Staying back, or stopping in the middle, leaves you between two positions. After the return, move forward with your partner and establish at the kitchen line.",
};

export const courseAssessment: LessonCheck[] = [
  {
    prompt: "When can a team hit the first volley of the rally?",
    options: [
      { id: "immediately", label: "As soon as the serve crosses the net." },
      { id: "two-bounce", label: "After the serve and the return have both bounced." },
      { id: "kitchen", label: "Only after both teams are standing in the kitchen." },
    ],
    answerId: "two-bounce",
    explanation:
      "The two-bounce rule starts every rally. The serve bounces, the return bounces, and then either team may volley.",
  },
  {
    prompt: "You are standing inside the kitchen and the ball is still in the air. What is legal?",
    options: [
      { id: "volley", label: "Volley it, as long as you call “kitchen” first." },
      { id: "let-bounce", label: "Let it bounce, then play it." },
      { id: "reach", label: "Reach across the net and play it before it bounces." },
    ],
    answerId: "let-bounce",
    explanation:
      "You may play a bounce from inside the kitchen. You may not volley while you are in it.",
  },
  {
    prompt:
      "In traditional doubles scoring, your team is receiving and wins the rally. What happens?",
    options: [
      { id: "point", label: "Your team scores a point." },
      {
        id: "side-out",
        label:
          "No point is scored. The serve moves to the second server, or to your team if the opponents’ service turn is over.",
      },
      {
        id: "replay",
        label: "The rally is replayed because the receiving team cannot win a rally.",
      },
    ],
    answerId: "side-out",
    explanation:
      "Only the serving team can score. If the opponents’ first server loses the rally, their partner serves next. If their second server loses it, a **side-out** passes the serve to your team. The score stays the same.\n\n**Opening exception:** The team serving first in a game starts with only one server, announced as **0–0–2**. Losing that opening service turn causes a side-out.",
  },
  {
    prompt: "Before you serve in doubles, which score do you call first?",
    options: [
      { id: "yours", label: "Your team’s score." },
      { id: "opponents", label: "Your opponents’ score." },
      { id: "winning", label: "The score of whichever team is winning." },
    ],
    answerId: "yours",
    explanation:
      "Call **your team’s score**, then **your opponents’ score**, then **the server number: 1 or 2**.",
  },
  {
    prompt: "A ball bounces at your feet while you are at the kitchen line. Which shot is it?",
    options: [
      { id: "volley", label: "A volley, because you are at the net." },
      { id: "dink", label: "A dink: a soft shot back into the kitchen." },
      { id: "overhead", label: "An overhead, because you are close to the net." },
    ],
    answerId: "dink",
    explanation:
      "The ball has bounced, so it is not a volley. From the kitchen, the useful shot is a soft dink into the opponent's kitchen.",
  },
  {
    prompt: "You just hit a deep return. Where do you and your partner go?",
    options: [
      { id: "stay", label: "Stay on the baseline until you see a short ball." },
      { id: "forward", label: "Move forward together and stop at the kitchen line." },
      { id: "split", label: "You move forward and your partner stays back." },
    ],
    answerId: "forward",
    explanation:
      "The return buys time to move. Both players go forward and establish at the kitchen, rather than leaving one player behind.",
  },
];

export const lessonCount = allLessons().length;
