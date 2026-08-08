/**
 * The consciousness research map.
 *
 * This is the source of truth for /artifacts/consciousness-map. Every node
 * carries a status, a plain-language explanation, and the articles it is
 * written up in. The status is the point: the map is a status board, not a
 * summary. Edit nodes here and the diagram, the counts, the signal lists and
 * the explainer panel all move together.
 */

/** Slugs of the consciousness series, so nodes can point at them by name. */
const A = {
	why: "why-i-got-interested-in-consciousness",
	worthDoing: "the-case-for-studying-consciousness",
	definition: "what-is-consciousness",
	origin: "how-does-awareness-get-here-emergent-and-non-emergent-accounts",
	measurement:
		"awake-asleep-comatose-what-measurement-actually-shows-and-what-it-doesn-t",
	silicon: "testing-consciousness-in-silicon-what-ai-can-and-can-t-teach-us",
	whoElse: "who-else-is-home-animals-plants-and-the-things-that-clearly-aren-t",
	reflection: "if-consciousness-is-reflected-what-is-doing-the-reflecting",
	sound: "the-sound-that-isn-t-supposed-to-be-there",
	twoWorlds: "two-worlds-what-follows-if-consciousness-is-mine-alone-or-not",
};

export const ARTICLES = {
	[A.why]: "Why I Got Interested in Consciousness",
	[A.worthDoing]: "The Case for Studying Consciousness",
	[A.definition]: "What Is Consciousness",
	[A.origin]: "How Does Awareness Get Here?",
	[A.measurement]: "Awake, Asleep, Comatose",
	[A.silicon]: "Testing Consciousness in Silicon",
	[A.whoElse]: "Who Else Is Home?",
	[A.reflection]: "If Consciousness Is Reflected, What Is Doing the Reflecting?",
	[A.sound]: "The Sound That Isn't Supposed to Be There",
	[A.twoWorlds]: "Two Worlds",
};

export const STATUS_META = {
	established: {
		label: "Established",
		blurb: "Checked against the literature and holding.",
	},
	inplay: {
		label: "In play",
		blurb: "A live position or framework, still being weighed.",
	},
	resolved: {
		label: "Resolved",
		blurb: "A judgment I have settled on, for now.",
	},
	open: {
		label: "Open",
		blurb: "Unresolved. This is where the work actually is.",
	},
	hypothesis: {
		label: "Hypothesis",
		blurb: "The load-bearing speculation the rest leans on.",
	},
	personal: {
		label: "Personal",
		blurb: "Motivation, and the bias it could introduce.",
	},
	planned: {
		label: "Planned",
		blurb: "Queued for writing or testing.",
	},
	/* Not part of the legend, but the explainer panel labels them too. */
	group: { label: "Grouping", blurb: "A cluster of related claims." },
	domain: { label: "Domain", blurb: "One of the nine areas of the map." },
};

export const STATUS_ORDER = [
	"established",
	"inplay",
	"resolved",
	"open",
	"hypothesis",
	"personal",
	"planned",
];

export const MAP_ROOT = "Consciousness Research: Conceptual Landscape";

export const BRANCHES = [
	{
		id: "foundations",
		short: "Foundations",
		label: "Foundational Definitions & Groundings",
		summary:
			"What the word has to mean before anything else can be argued about.",
		plain: "Before you can argue about consciousness you have to say what the word points at. Different fields use it for different things, and a surprising number of disagreements turn out to be arguments about the definition rather than about the world.",
		articles: [A.definition, A.worthDoing],
		nodes: [
			{
				id: "fnd1",
				label: "Descartes cogito: doubting itself cannot be doubted, the one solid floor",
				status: "established",
				plain: "Descartes noticed that you can doubt almost anything, but you cannot doubt that doubting is happening. Something has to be present for the doubt to occur at all. That makes your own awareness the single thing you can be certain of, which is why the whole project starts there.",
				articles: [A.worthDoing, A.definition],
			},
			{
				id: "fnd2",
				label: "SETTLED DEFINITION: bare awareness, distinct from its content",
				status: "established",
				plain: "The definition used throughout this project. Awareness is the bare fact that experiencing is happening at all, kept separate from whatever is being experienced. Thoughts, sights and feelings are content. Awareness is the space they show up in.",
				articles: [A.definition],
			},
			{
				id: "fnd2a",
				parent: "fnd2",
				label: "REJECTED: clinical definition (measures degree, not presence)",
				status: "resolved",
				plain: "Hospitals define consciousness by how responsive a patient is, on a scale running from alert to comatose. That measures how much is getting through, not whether anyone is home, so it cannot answer the question being asked here.",
				articles: [A.definition, A.measurement],
			},
			{
				id: "fnd2b",
				parent: "fnd2",
				label: "REJECTED: functional-levels definition (smuggles in function = feeling)",
				status: "resolved",
				plain: "Some definitions say a system is conscious once it performs certain functions, such as attention or self-monitoring. That quietly assumes the answer, because it treats doing the job as identical to feeling something, and whether those are the same is the exact thing in dispute.",
				articles: [A.definition],
			},
			{
				id: "fnd3",
				label: "Chalmers hard problem: why is processing accompanied by felt experience?",
				status: "inplay",
				plain: "David Chalmers named the gap at the centre of the field. We can explain what the brain does, but not why any of that doing is accompanied by an inner feeling. In principle a system could carry out every task with nobody inside, so the feeling needs an explanation of its own.",
				articles: [A.origin, A.definition],
			},
			{
				id: "fnd3a",
				parent: "fnd3",
				label: "Easy problems: reasoning, language, mechanics",
				status: "established",
				plain: "Chalmers called the mechanical questions easy, not because they are simple but because we know what a solution would look like. Explain the circuit and you have explained reasoning, memory or language, with nothing left over.",
				articles: [A.origin],
			},
			{
				id: "fnd4",
				label: "Ned Block: phenomenal vs access consciousness",
				status: "inplay",
				plain: "Ned Block split the word in two. Access consciousness is information being available to the rest of the system for reasoning and speech. Phenomenal consciousness is what it feels like. Many arguments go in circles because one side means one and the other means the other.",
				articles: [A.definition],
			},
			{
				id: "fnd5",
				label: "Separability of awareness from content is useful across all theories",
				status: "established",
				plain: "The split between awareness and its content does useful work no matter which theory turns out to be right. Both camps can adopt it, so using it does not quietly decide the answer in advance.",
				articles: [A.definition],
			},
		],
	},
	{
		id: "debate",
		short: "Core Debate",
		label: "The Core Metaphysical Debate",
		summary:
			"Is awareness built by the brain, or reflected in it? Everything else hangs off this fork.",
		plain: "The central fork. Either the brain manufactures awareness out of physical parts, or awareness is already there and the brain gives it a local shape. Almost every other question in the map inherits its answer from this one.",
		articles: [A.origin, A.reflection],
		nodes: [
			{
				id: "dbt0",
				label: "OPEN: is the emergent vs non-emergent binary even the right framing?",
				status: "open",
				plain: "Splitting the field into built versus fundamental may itself be a mistake. The real answer could sit between the two, or need a description neither camp currently has. This stays flagged so the framing does not get treated as settled.",
				articles: [A.origin],
			},

			{
				id: "dbtEm",
				label: "Emergent Camp: consciousness is built",
				status: "group",
				plain: "Theories that say awareness is manufactured. Arrange matter in the right way and experience appears, much as a working engine appears once the parts are assembled correctly.",
				articles: [A.origin],
			},
			{
				id: "dbtEm1",
				parent: "dbtEm",
				label: "Physicalism / identity theory: a mental state IS a brain state",
				status: "inplay",
				plain: "The simplest version of the built view. A mental state is not caused by a brain state, it simply is that brain state under a different description. Pain and a particular pattern of neural firing are one thing with two names.",
				articles: [A.origin],
			},
			{
				id: "dbtEm1a",
				parent: "dbtEm1",
				label: "Putnam multiple realizability breaks strict identity theory",
				status: "established",
				plain: "Hilary Putnam objected that the same mental state can run on very different hardware. If an octopus, a human and possibly a machine can all feel pain, then pain cannot be identical to one specific human brain pattern.",
				articles: [A.origin],
			},
			{
				id: "dbtEm2",
				parent: "dbtEm",
				label: "Integrated Information Theory (IIT): axioms and the phi measure",
				status: "inplay",
				plain: "Integrated Information Theory starts from what experience is like and works backwards to what a system must be doing. It proposes a number, phi, for how much a system's information is unified rather than separable. High phi is supposed to mean consciousness.",
				articles: [A.origin, A.silicon],
			},
			{
				id: "dbtEm2a",
				parent: "dbtEm2",
				label: "100+ researchers signed a letter calling IIT unfalsifiable pseudoscience",
				status: "established",
				plain: "In 2023 more than a hundred researchers signed an open letter arguing that IIT is unfalsifiable and closer to pseudoscience than science, on the grounds that no realistic experiment could clearly refute it.",
				articles: [A.origin],
			},
			{
				id: "dbtEm3",
				parent: "dbtEm",
				label: "Global Workspace Theory: spotlight broadcast",
				status: "inplay",
				plain: "Global Workspace Theory says the mind runs a spotlight. Content becomes conscious when it wins the competition for that spotlight and gets broadcast to the rest of the brain.",
				articles: [A.origin],
			},
			{
				id: "dbtEm3a",
				parent: "dbtEm3",
				label: "Explains access well, phenomenal barely",
				status: "established",
				plain: "The theory is convincing about which information becomes available for report and reasoning. It says very little about why that broadcast is accompanied by any feeling at all.",
				articles: [A.origin],
			},
			{
				id: "dbtEm4",
				parent: "dbtEm",
				label: "Computationalism: substrate independence, mind-uploading",
				status: "inplay",
				plain: "If consciousness is a pattern of computation rather than a particular material, the same pattern running in silicon should be just as conscious as one running in neurons. This is the assumption underneath mind-uploading.",
				articles: [A.silicon, A.origin],
			},
			{
				id: "dbtEm4a",
				parent: "dbtEm4",
				label: "Searle Chinese Room: manipulation does not guarantee understanding",
				status: "established",
				plain: "John Searle imagined someone in a sealed room following rules to answer letters written in Chinese without understanding a word. The room behaves as though it understands, which suggests correct symbol manipulation is not the same thing as understanding.",
				articles: [A.silicon],
			},
			{
				id: "dbtEm5",
				parent: "dbtEm",
				label: "Anil Seth: predictive processing, controlled hallucination",
				status: "inplay",
				plain: "Anil Seth argues the brain is not so much receiving the world as guessing it and correcting the guess against incoming signals. Perception is a hallucination that stays tethered to reality, which is why it can come loose in unusual conditions.",
				articles: [A.origin],
			},

			{
				id: "dbtNe",
				label: "Non-Emergent Camp: consciousness is fundamental",
				status: "group",
				plain: "Theories that say awareness is not manufactured at all. It is a basic feature of reality, and brains are what let it show up in a particular local form.",
				articles: [A.origin, A.reflection],
			},
			{
				id: "dbtNe1",
				parent: "dbtNe",
				label: "Advaita reflection theory: mind reflects, does not generate",
				status: "inplay",
				plain: "The Advaita position in one image. The mind no more produces awareness than a mirror produces sunlight. It reflects something already present, which is why damaging the mirror changes the reflection without touching the source.",
				articles: [A.reflection],
			},
			{
				id: "dbtNe1a",
				parent: "dbtNe1",
				label: "Chidabhasa: a semblance of consciousness in the instrument",
				status: "resolved",
				plain: "The Sanskrit term for that reflection. Chidabhasa is the appearance of consciousness in the instrument rather than consciousness itself, and mistaking the appearance for the thing is where the confusion usually begins.",
				articles: [A.reflection],
			},
			{
				id: "dbtNe2",
				parent: "dbtNe",
				label: "Panpsychism (Goff): ubiquitous, even in electrons",
				status: "inplay",
				plain: "Philip Goff and others argue that if experience cannot be assembled out of parts that have none, then the parts must already carry a trace of it. On this view even an electron has some minimal inner aspect.",
				articles: [A.origin],
			},
			{
				id: "dbtNe2a",
				parent: "dbtNe2",
				label: "Combination problem: how do micro-experiences unify?",
				status: "open",
				plain: "Panpsychism's hardest objection. If every particle carries a flicker of experience, why does a brain full of them produce one unified point of view instead of billions of unconnected ones?",
				articles: [A.origin],
			},
			{
				id: "dbtNe3",
				parent: "dbtNe",
				label: "The Field Hypothesis",
				status: "hypothesis",
				plain: "The working speculation this project keeps returning to. Awareness is treated as something like a field that is always present, with the brain acting as a receiver tuned into it rather than a generator producing it.",
				articles: [A.reflection],
			},
			{
				id: "dbtNe3a",
				parent: "dbtNe3",
				label: "Instrument cannot detect the field because it IS the field",
				status: "open",
				plain: "The defence of the field idea, and also its weak point. Any instrument you could use to look for the field is itself made of experience, so the field could never turn up as one more object inside a measurement.",
				articles: [A.reflection, A.measurement],
			},
			{
				id: "dbtNe3b",
				parent: "dbtNe3",
				label: "Defense is structurally identical to IIT unfalsifiability",
				status: "open",
				plain: "An honesty check on my own position. The reason I give for why the field cannot be detected has the same shape as the reason IIT gets criticised for being unfalsifiable. If that objection lands against them, it lands against me too.",
				articles: [A.reflection],
			},
		],
	},
	{
		id: "physics",
		short: "Physics",
		label: "Physics & Boundary Theories",
		summary:
			"Where the field framing meets actual physics, and where it stops being allowed to borrow from it.",
		plain: "Where the field idea brushes up against real physics. Some of it gives the idea room to breathe, and some of it takes away support the idea is often assumed to have.",
		articles: [A.reflection, A.origin],
		nodes: [
			{
				id: "phy1",
				label: "Confirmed: wave-particle duality, curved spacetime",
				status: "established",
				plain: "Physics already accepts things that sound stranger than a consciousness field. Light behaves as both wave and particle, and space itself bends. Being counter-intuitive is not on its own a mark against an idea.",
			},
			{
				id: "phy2",
				label: "CORRECTION: QM does NOT imply consciousness causes collapse",
				status: "resolved",
				plain: "A popular claim, and a wrong one. Quantum measurement does not need a conscious observer. Any sufficient interaction with the environment does the job, so quantum mechanics gives no support to the idea that consciousness collapses the wave function. I had to correct myself on this.",
			},
			{
				id: "phy3",
				label: "Penrose Orch-OR (faces the warm-wet-noisy critique)",
				status: "established",
				plain: "Roger Penrose and Stuart Hameroff proposed that consciousness arises from quantum processes inside microtubules in neurons. The standard objection is that the brain is too warm, wet and noisy for delicate quantum states to survive long enough to matter.",
			},
			{
				id: "phy4",
				label: "Donald Hoffman: spacetime is an interface, not fundamental",
				status: "established",
				plain: "Donald Hoffman argues that space and time are more like a desktop interface than the machine behind it. Useful for staying alive, but not a picture of what is actually there.",
			},
			{
				id: "phy5",
				label: "PEAR Lab / Global Consciousness Project",
				status: "established",
				plain: "Two long-running attempts to detect minds affecting matter at a distance, mostly using random number generators. If awareness were a shared field, effects like this are the sort of thing that might show up.",
			},
			{
				id: "phy5a",
				parent: "phy5",
				label: "Bancel 2017: no support found, the 9/11 spike was a fluke",
				status: "established",
				plain: "A careful 2017 reanalysis found no support for the claim. The famous spike around September 11 does not survive scrutiny and looks like chance. This one goes in the evidence-against column, including against my own preferred picture.",
			},
		],
	},
	{
		id: "measurement",
		short: "Measurement",
		label: "Measurement & Clinical Realities",
		summary:
			"The strongest empirical ground in the whole map, and the place the whole project runs aground.",
		plain: "The most solid empirical ground anywhere in the map, and also the exact place where the project hits a wall. We can measure consciousness far better than most people realise, and it still does not settle the question that matters.",
		articles: [A.measurement],
		nodes: [
			{
				id: "msr1",
				label: "Zap-and-zip / PCI: the human-side gold standard",
				status: "established",
				plain: "The best test we have. A magnetic pulse is fired into the brain and the echo it produces is compressed like a zip file. Complex, hard-to-compress echoes mean the brain is doing rich, joined-up work. Simple echoes mean it is not.",
			},
			{
				id: "msr1a",
				parent: "msr1",
				label: "Thresholds: wake approx 48 vs NREM / anaesthesia approx 14",
				status: "established",
				plain: "The numbers come out cleanly. Awake brains score around the high forties on this index. Deep sleep and anaesthesia drop to around fourteen. The gap is large, stable and reproducible across labs.",
			},

			{
				id: "msrDis",
				label: "Behavior & Awareness Dissociations",
				status: "group",
				plain: "Cases where outward behaviour and inner awareness come apart. These are what make behaviour on its own useless as a test for consciousness.",
			},
			{
				id: "msrDis1",
				parent: "msrDis",
				label: "Locked-in syndrome: high PCI, zero behavior",
				status: "established",
				plain: "A locked-in patient is fully awake and thinking but almost completely paralysed. The brain measure comes out high while visible behaviour is close to nothing.",
			},
			{
				id: "msrDis2",
				parent: "msrDis",
				label: "REM sleep: high PCI despite full paralysis",
				status: "established",
				plain: "During dreaming the body is paralysed while the brain is highly active and experience is plainly happening. Stillness again tells you nothing about whether anyone is home.",
			},
			{
				id: "msrDis3",
				parent: "msrDis",
				label: "Ketamine: high PCI plus unresponsiveness",
				status: "established",
				plain: "Under ketamine people stop responding but report vivid experience afterwards. The brain measure stays high, matching what they report rather than how they behave.",
			},

			{
				id: "msrComa",
				label: "Coma & Vegetative States (UWS)",
				status: "group",
				plain: "What happens when these tools get pointed at patients who cannot tell us anything at all.",
			},
			{
				id: "msrComa1",
				parent: "msrComa",
				label: "Approx 40 percent of vegetative diagnoses are misdiagnoses",
				status: "established",
				plain: "Roughly four in ten patients diagnosed as vegetative turn out to have more awareness than the diagnosis assumed. That is not a rounding error, it is a large number of people being written off.",
			},
			{
				id: "msrComa2",
				parent: "msrComa",
				label: "Cognitive Motor Dissociation (CMD): brain reacts to commands but body cannot",
				status: "established",
				plain: "The patient is asked to imagine playing tennis, the brain lights up in exactly the right way, and the body cannot move at all. Someone is in there, hearing the instruction and following it.",
			},
			{
				id: "msrComa2a",
				parent: "msrComa2",
				label: "25 percent of command non-responders show CMD (2024 study)",
				status: "established",
				plain: "A 2024 study found this pattern in about a quarter of patients who failed every behavioural test. A quarter of the people assumed to be absent were present.",
			},

			{
				id: "msr2",
				label: "MASTER FINDING: every method measures the instrument reading itself",
				status: "open",
				plain: "The wall. Every method we have measures the brain, and the brain is the instrument. None of them reaches past the instrument to awareness itself, so the question of whether the brain generates or reflects survives all of it untouched.",
			},
			{
				id: "msr2a",
				parent: "msr2",
				label: "Cannot distinguish absence of the field from a broken receiver",
				status: "open",
				plain: "Put concretely. A brain showing nothing looks identical whether awareness was never there or the receiver is simply broken. No test currently separates those two cases, and I cannot design one.",
			},
			{
				id: "msr2b",
				parent: "msr2",
				label: "Practical value survives: CMD detection saves lives despite the stalemate",
				status: "resolved",
				plain: "The philosophical stalemate does not make the work pointless. Detecting hidden awareness changes how patients are treated and saves lives, whichever metaphysics turns out to be true.",
			},
			{
				id: "msr3",
				label: "Evan Thompson: dreamless sleep is not a uniform unconscious state",
				status: "established",
				plain: "Evan Thompson argues that dreamless sleep is not one blank state. Both contemplative traditions and some sleep research suggest something subtler continues, which matters for any claim that awareness simply switches off.",
			},
		],
	},
	{
		id: "ai",
		short: "AI",
		label: "Artificial Intelligence",
		summary:
			"Not a referee for the metaphysics. A build surface where predictions can actually be run.",
		plain: "AI cannot referee the metaphysics, and I stopped expecting it to. What it can be is a place where narrow, specific predictions get built and checked instead of argued about.",
		articles: [A.silicon],
		nodes: [
			{
				id: "ai1",
				label: "AI reframed: a playground for testing predictions, not a referee",
				status: "resolved",
				plain: "My own correction. I came in hoping a sufficiently advanced machine would answer whether consciousness is generated or reflected. It will not. What it offers instead is a laboratory for smaller, testable claims.",
			},
			{
				id: "ai1a",
				parent: "ai1",
				label: "Even a perfect AI would not resolve generation vs reflection",
				status: "open",
				plain: "Suppose a machine behaved exactly like a conscious being in every respect. It still would not tell you whether it generates awareness or reflects it, because the same behaviour is compatible with both stories.",
			},
			{
				id: "ai2",
				label: "Butlin 2023: 14 indicator properties drawn from 5 theories",
				status: "established",
				plain: "A 2023 paper by Butlin, Long and colleagues did something genuinely useful. Rather than argue about which theory is right, it pulled fourteen concrete indicator properties out of five leading theories and asked which ones current systems actually have.",
			},
			{
				id: "ai2a",
				parent: "ai2",
				label: "No current AI satisfies them, but no fundamental barrier exists",
				status: "established",
				plain: "The verdict was that no existing system ticks the boxes, and also that nothing about the boxes rules out a future system that does. There is distance to cover, but no wall.",
			},
			{
				id: "ai2b",
				parent: "ai2",
				label: "Framework presupposes computational functionalism",
				status: "established",
				plain: "The catch. The checklist is assembled from theories that already assume consciousness is a matter of the right computation. If that assumption is wrong, the whole list is measuring the wrong thing very carefully.",
			},
			{
				id: "ai3",
				label: "Roadmap: mech interpretability → comp neuro → NeuroAI",
				status: "inplay",
				plain: "The practical path I am following. Learn mechanistic interpretability, then computational neuroscience, then the overlap between them, because that is where testable questions about awareness in machines are going to live.",
			},
			{
				id: "ai4",
				label: "Neel Nanda pivoting away from circuits is a headwind",
				status: "open",
				plain: "A headwind worth naming out loud. Neel Nanda, one of the leading interpretability researchers, has moved away from circuit-level analysis, which is exactly the approach my roadmap was counting on.",
			},
			{
				id: "ai4a",
				parent: "ai4",
				label: "RESOLUTION: pursue anyway; AI safety is a side effect, not the goal",
				status: "resolved",
				plain: "My decision. Keep going regardless. The interpretability work is worth doing for AI safety on its own terms, and safety here is a genuine side benefit rather than the reason I am doing it.",
			},
			{
				id: "ai5",
				label: "Skeptics: Pistilli (distraction), McClelland (epistemic wall)",
				status: "established",
				plain: "Two objections I take seriously. Giada Pistilli argues that consciousness talk distracts from the harms AI is causing right now. Tom McClelland argues we may be facing a permanent limit on what can be known here rather than a hard problem waiting to be solved.",
			},
		],
	},
	{
		id: "biology",
		short: "Biology",
		label: "Biological Distribution",
		summary:
			"Who else is home. The one question both camps can make progress on without agreeing on anything else.",
		plain: "Which creatures are conscious, and which clearly are not. This is the one part of the field where both camps can make real progress without first agreeing on where awareness comes from.",
		articles: [A.whoElse],
		nodes: [
			{
				id: "bio1",
				label: "AGREEMENT: both camps agree rocks and thermostats lack it",
				status: "resolved",
				plain: "A rare point of consensus. Whether awareness is built or fundamental, both camps agree that rocks and thermostats do not have it. That shared floor is what makes the distribution question workable.",
			},
			{
				id: "bio2",
				label: "Cambrian explosion: evolved independently 3 times",
				status: "established",
				plain: "Complex nervous systems appear independently at least three times in evolutionary history: in vertebrates, in arthropods and in cephalopods. Three separate inventions of roughly the same thing.",
			},
			{
				id: "bio2a",
				parent: "bio2",
				label: "Convergent evolution indicates strong adaptive value",
				status: "established",
				plain: "When evolution reaches the same solution repeatedly from different starting points, that solution is usually doing something valuable. It is an argument for awareness being useful rather than an accident.",
			},
			{
				id: "bio3",
				label: "Cambridge 2012 and New York 2024 Declarations on Animal Consciousness",
				status: "established",
				plain: "Two formal statements by working scientists. The 2012 Cambridge Declaration extended consciousness to mammals and birds. The 2024 New York Declaration went considerably further, covering reptiles, fish, insects and cephalopods.",
			},
			{
				id: "bio4",
				label: "Plant neurobiology (Mancuso vs Taiz)",
				status: "inplay",
				plain: "Stefano Mancuso argues that plants sense, signal and behave in ways that deserve the word cognition. Lincoln Taiz argues this is metaphor stretched past breaking point, since plants have no neurons at all.",
			},
			{
				id: "bio4a",
				parent: "bio4",
				label: "UNRESOLVED: but both sides share threshold-based logic",
				status: "open",
				plain: "The debate is not settled, but notice that both sides argue the same way. Each picks a level of complexity and says awareness begins there. They disagree about where the line sits, not about whether there is one.",
			},
			{
				id: "bio5",
				label: "CONCLUSION: distribution is tractable separately from metaphysics",
				status: "resolved",
				plain: "A useful result. You can make genuine progress on who else is conscious without ever resolving how consciousness gets here. The two questions come apart cleanly.",
			},
		],
	},
	{
		id: "subjective",
		short: "Subjective",
		label: "Subjective Investigation",
		summary:
			"First-person method. Useful, and strictly bounded by what a subject can verify from the inside.",
		plain: "Looking directly at your own experience as a method. Genuinely useful, and strictly limited by what a subject can actually check from the inside.",
		articles: [A.sound, A.reflection],
		nodes: [
			{
				id: "sub1",
				label: "Jnana Yoga: inquiry-based, analytic, neti-neti negation",
				status: "inplay",
				plain: "The analytical branch of the Indian tradition. Instead of belief or devotion it uses inquiry, repeatedly asking what you are not, on the reasoning that anything you can observe cannot be the one observing.",
				articles: [A.reflection],
			},
			{
				id: "sub2",
				label: "Anahata Nada (the sound of silence)",
				status: "inplay",
				plain: "A continuous high-pitched sound many people notice in complete silence. The tradition treats it as an inner sound with no external source, and sometimes as a sign of something deeper.",
				articles: [A.sound],
			},
			{
				id: "sub2a",
				parent: "sub2",
				label: "Science: spontaneous otoacoustic emissions, a real physical cochlear sound",
				status: "established",
				plain: "The physical explanation. Healthy ears emit faint sounds of their own, called spontaneous otoacoustic emissions. They can be recorded with a microphone placed in the ear canal, so the sound is real and physical rather than imagined.",
				articles: [A.sound],
			},
			{
				id: "sub2b",
				parent: "sub2",
				label: "RESOLUTION: it is the last rung of content, not the field itself",
				status: "resolved",
				plain: "My conclusion. The sound is the finest thing you can notice, but it is still something being noticed. That makes it the last rung of content rather than awareness itself.",
				articles: [A.sound],
			},
			{
				id: "sub2c",
				parent: "sub2",
				label: "Hearing the hum is not hearing the electricity",
				status: "resolved",
				plain: "The analogy that settles it for me. Hearing a speaker hum is not hearing electricity. Noticing a subtle inner sound is not noticing awareness, only its quietest object.",
				articles: [A.sound],
			},
			{
				id: "sub3",
				label: "CORE INSIGHT: awareness cannot become its own object",
				status: "resolved",
				plain: "The structural point behind all of this. Whatever you can observe is content, and awareness is what is doing the observing. It can never show up as its own object, in the way an eye cannot directly see itself.",
				articles: [A.reflection, A.sound],
			},
			{
				id: "sub3a",
				parent: "sub3",
				label: "Turiya: the constant background behind waking, dreaming and sleep",
				status: "inplay",
				plain: "The tradition's name for what stays constant behind waking, dreaming and deep sleep. Not a fourth state sitting alongside the other three so much as what those three occur within.",
				articles: [A.reflection],
			},

			{
				id: "subSam",
				label: "Samadhi & Meditation States",
				status: "group",
				plain: "Deep meditative states, and the question of what can actually be verified about them from outside.",
				articles: [A.reflection],
			},
			{
				id: "subSam1",
				parent: "subSam",
				label: "Laukkonen 2020: measurable drop in brain sync approaching cessation",
				status: "established",
				plain: "Ruben Laukkonen and colleagues measured brain activity approaching cessation, a reported complete stopping of experience in advanced meditators. Brain synchrony drops measurably beforehand, which makes the reports harder to wave away.",
				articles: [A.reflection],
			},
			{
				id: "subSam2",
				parent: "subSam",
				label: "Sahaja (constant) vs Nirvikalpa (induced, temporary)",
				status: "inplay",
				plain: "Two different claims that often get run together. Nirvikalpa is a temporary state entered deliberately and then lost. Sahaja is supposed to be permanent, continuing through ordinary waking life.",
				articles: [A.reflection],
			},
			{
				id: "subSam3",
				parent: "subSam",
				label: "BOTTLENECK: no verified case of anyone achieving Sahaja exists",
				status: "open",
				plain: "The problem. There is no verified case of anyone demonstrably in the permanent state. Without one, the strongest claim the tradition makes has nothing behind it but testimony.",
				articles: [A.reflection],
			},
		],
	},
	{
		id: "ethics",
		short: "Ethics",
		label: "Ethical & Existential Consequences",
		summary:
			"What actually changes depending on which fork is true. Two pictures, two sets of stakes.",
		plain: "What actually changes depending on which fork turns out to be true. This is the part that made the whole question matter to me rather than remain an interesting puzzle.",
		articles: [A.twoWorlds],
		nodes: [
			{
				id: "eth1",
				label: "Identity is where nearly all suffering concentrates",
				status: "inplay",
				plain: "The observation underneath everything else here. Almost all suffering clusters around identity, around being a separate self with something to lose. What is true about that self is not an abstract question.",
			},

			{
				id: "ethA",
				label: "PICTURE A: emergent, individual, dualistic",
				status: "inplay",
				plain: "The world if consciousness is built. Your awareness is produced by your brain, it belongs to you alone, and other people are genuinely separate centres of experience.",
			},
			{
				id: "ethA1",
				parent: "ethA",
				label: "Death = real, final annihilation of that experience stream",
				status: "inplay",
				plain: "In this picture death is exactly what it appears to be. The machine stops, and the stream of experience it was producing ends completely and permanently.",
			},
			{
				id: "ethA2",
				parent: "ethA",
				label: "Singer / Parfit: expanding the circle via rational argument",
				status: "established",
				plain: "Ethics still works in this picture, but it has to be argued for rather than felt. Peter Singer and Derek Parfit build outward from reason, widening the circle of who counts instead of appealing to any shared identity.",
			},

			{
				id: "ethB",
				label: "PICTURE B: non-emergent, non-dual, reflected",
				status: "inplay",
				plain: "The world if consciousness is fundamental. Awareness is one thing appearing through many instruments, and separateness is real at the level of bodies but not at the level of what is aware.",
			},
			{
				id: "ethB1",
				parent: "ethB",
				label: "Bhagavad Gita / Spinoza: equal vision, one substance, finite modes",
				status: "established",
				plain: "Two traditions arriving at similar ground from opposite directions. The Bhagavad Gita describes seeing the same reality in every being. Spinoza describes one substance with individuals as its finite modes.",
			},
			{
				id: "ethB2",
				parent: "ethB",
				label: "Schopenhauer: compassion via piercing the principium individuationis",
				status: "established",
				plain: "Schopenhauer's account of where compassion comes from. It arises when the illusion of separateness thins and another person's suffering stops registering as fully separate from your own.",
			},
			{
				id: "ethB3",
				parent: "ethB",
				label: "Death: awareness not generated by the body does not end with it",
				status: "inplay",
				plain: "In this picture what the body ends is the local reflection, not the awareness being reflected. That is a genuinely different claim about death, not a softer way of saying the same thing.",
			},
			{
				id: "ethB4",
				parent: "ethB",
				label: "CAUTION: not a promise that personal memory or identity survives",
				status: "resolved",
				plain: "An important limit on that comfort. Even if awareness continues, nothing here promises that your memories, your personality or your sense of being you survive. Those belong to the instrument.",
			},

			{
				id: "ethC",
				label: "Critiques of Non-Dual Ethics",
				status: "group",
				plain: "Serious objections to the non-dual picture, kept in the map rather than argued away.",
			},
			{
				id: "ethC1",
				parent: "ethC",
				label: "Ramanuja: if the world is illusion, harm is not real → unlivable ethics",
				status: "open",
				plain: "Ramanuja's classical objection to Advaita. If the world is ultimately unreal, then harm done in it is unreal too, and the position collapses into an ethics nobody could actually live by.",
			},
			{
				id: "ethC2",
				parent: "ethC",
				label: "DEFENSE: two-truths doctrine, conventional ethics fully binding",
				status: "inplay",
				plain: "The standard reply. Two levels of truth are held at once. At the ultimate level separateness dissolves, at the everyday level it is completely binding, and you remain fully answerable for what you do.",
			},
		],
	},
	{
		id: "personal",
		short: "Personal & Next",
		label: "Personal Context & Future Bottlenecks",
		summary:
			"Why I am doing this, what could bend my reading of it, and exactly where it is stuck.",
		plain: "Why I am doing this at all, what could bend my reading of the evidence, and exactly where the project is currently stuck. Kept in the map on purpose, because leaving it out would make the rest look more neutral than it is.",
		articles: [A.why, A.worthDoing],
		nodes: [
			{
				id: "per1",
				label: "Depression, emptiness; money and fame cannot give lasting happiness",
				status: "personal",
				plain: "The honest starting point. This began with depression and a persistent sense of emptiness, and with noticing that the usual answers, money and recognition, do not resolve it.",
				articles: [A.why],
			},
			{
				id: "per2",
				label: "Author pull toward Advaita / Picture B is explicitly monitored",
				status: "personal",
				plain: "A declared bias. I am drawn to the Advaita picture, which makes me the person most likely to read the evidence too generously in its favour. Naming it out loud is the only real defence I have.",
				articles: [A.why, A.reflection],
			},
			{
				id: "per2a",
				parent: "per2",
				label: "No proposed test for generation vs reflection",
				status: "open",
				plain: "The concrete gap. I have not been able to design a single experiment that would come out differently depending on whether the brain generates awareness or reflects it. Until I can, the preference stays a preference.",
				articles: [A.measurement, A.reflection],
			},
			{
				id: "per3",
				label: "Explicit disclaimer: non-mystical, experience and reasoning only",
				status: "personal",
				plain: "Ground rules for the series. Nothing here rests on revelation, authority or mystical experience. Only on ordinary experience anyone can check for themselves and reasoning that can be argued with.",
				articles: [A.worthDoing],
			},

			{
				id: "perStuck",
				label: "WHERE THE PROJECT IS STUCK",
				status: "group",
				plain: "The two questions currently blocking progress. Everything else can move while these stay unresolved, but not very far.",
			},
			{
				id: "perStuck1",
				parent: "perStuck",
				label: "Can awareness exist without content?",
				status: "open",
				plain: "If awareness always arrives with something being experienced, then the split between the two may be a useful description rather than a real separation. I cannot yet tell which it is, and a lot rests on it.",
				articles: [A.definition, A.sound],
			},
			{
				id: "perStuck2",
				parent: "perStuck",
				label: "Anatta (Buddhist no-self) vs Atman (Advaita Self)",
				status: "open",
				plain: "Two traditions reaching opposite conclusions from very similar practice. Buddhism concludes there is no self underneath at all. Advaita concludes there is a self and it is all there is. I have not resolved this and will not pretend otherwise.",
				articles: [A.reflection, A.twoWorlds],
			},

			{
				id: "perPlan",
				label: "PLANNED WRITING",
				status: "group",
				plain: "What is queued next, written down so the gaps stay visible rather than quietly disappearing.",
			},
			{
				id: "perPlan1",
				parent: "perPlan",
				label: "Anatta vs Atman deep dive",
				status: "planned",
				plain: "A full treatment of the no-self and Self disagreement, since it is the largest unresolved item anywhere in the map.",
			},
			{
				id: "perPlan2",
				parent: "perPlan",
				label: "Sahaja vs Nirvikalpa samadhi in depth",
				status: "planned",
				plain: "A closer look at the two samadhi claims, and at what evidence would be needed before the permanent one could be taken seriously.",
			},
			{
				id: "perPlan3",
				parent: "perPlan",
				label: "Observer equals observed: moral implications",
				status: "planned",
				plain: "Working out what actually follows, morally, if the observer and the observed turn out to be the same thing.",
			},
			{
				id: "perPlan4",
				parent: "perPlan",
				label: "Continued AI testing as interpretability matures",
				status: "planned",
				plain: "Revisiting the machine predictions once interpretability tools are good enough to check them properly.",
			},
		],
	},
];

/** Status tallies for one branch, or for the whole map when passed BRANCHES. */
export function countStatuses(branches) {
	const list = Array.isArray(branches) ? branches : [branches];
	const counts = {};
	for (const status of STATUS_ORDER) counts[status] = 0;

	let total = 0;
	for (const branch of list) {
		for (const node of branch.nodes) {
			if (node.status === "group") continue;
			total += 1;
			counts[node.status] = (counts[node.status] || 0) + 1;
		}
	}

	return { total, counts };
}

const brief = (node) => ({
	id: node.id,
	label: node.label,
	status: node.status,
});

/**
 * Everything the explainer panel needs for one node: the plain-language
 * version, the articles it is written up in, and the neighbours it connects
 * to so the panel can be walked like the diagram. Nodes inherit their
 * branch's articles unless they name their own.
 */
export function getNodeDetail(id) {
	for (const branch of BRANCHES) {
		if (branch.id === id) {
			return {
				id: branch.id,
				label: branch.label,
				status: "domain",
				plain: branch.plain,
				articles: branch.articles || [],
				domain: branch.label,
				parent: null,
				children: branch.nodes.filter((node) => !node.parent).map(brief),
			};
		}

		const node = branch.nodes.find((item) => item.id === id);
		if (!node) continue;

		const parent = node.parent
			? branch.nodes.find((item) => item.id === node.parent)
			: branch;

		return {
			id: node.id,
			label: node.label,
			status: node.status,
			plain: node.plain,
			articles: node.articles || branch.articles || [],
			domain: branch.label,
			parent: parent ? { id: parent.id, label: parent.label } : null,
			children: branch.nodes
				.filter((item) => item.parent === node.id)
				.map(brief),
		};
	}

	return null;
}
