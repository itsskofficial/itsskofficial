/**
 * The consciousness research map.
 *
 * This is the source of truth for the /artifacts page. Every node carries a
 * status, and the status is the point: the map is a status board, not a
 * summary. Edit nodes here and the diagram, the counts and the signal lists
 * all move together.
 */

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
		nodes: [
			{
				id: "fnd1",
				label: "Descartes cogito: doubting itself cannot be doubted, the one solid floor",
				status: "established",
			},
			{
				id: "fnd2",
				label: "SETTLED DEFINITION: bare awareness, distinct from its content",
				status: "established",
			},
			{
				id: "fnd2a",
				parent: "fnd2",
				label: "REJECTED: clinical definition (measures degree, not presence)",
				status: "resolved",
			},
			{
				id: "fnd2b",
				parent: "fnd2",
				label: "REJECTED: functional-levels definition (smuggles in function = feeling)",
				status: "resolved",
			},
			{
				id: "fnd3",
				label: "Chalmers hard problem: why is processing accompanied by felt experience?",
				status: "inplay",
			},
			{
				id: "fnd3a",
				parent: "fnd3",
				label: "Easy problems: reasoning, language, mechanics",
				status: "established",
			},
			{
				id: "fnd4",
				label: "Ned Block: phenomenal vs access consciousness",
				status: "inplay",
			},
			{
				id: "fnd5",
				label: "Separability of awareness from content is useful across all theories",
				status: "established",
			},
		],
	},
	{
		id: "debate",
		short: "Core Debate",
		label: "The Core Metaphysical Debate",
		summary:
			"Is awareness built by the brain, or reflected in it? Everything else hangs off this fork.",
		nodes: [
			{
				id: "dbt0",
				label: "OPEN: is the emergent vs non-emergent binary even the right framing?",
				status: "open",
			},

			{
				id: "dbtEm",
				label: "Emergent Camp: consciousness is built",
				status: "group",
			},
			{
				id: "dbtEm1",
				parent: "dbtEm",
				label: "Physicalism / identity theory: a mental state IS a brain state",
				status: "inplay",
			},
			{
				id: "dbtEm1a",
				parent: "dbtEm1",
				label: "Putnam multiple realizability breaks strict identity theory",
				status: "established",
			},
			{
				id: "dbtEm2",
				parent: "dbtEm",
				label: "Integrated Information Theory (IIT): axioms and the phi measure",
				status: "inplay",
			},
			{
				id: "dbtEm2a",
				parent: "dbtEm2",
				label: "100+ researchers signed a letter calling IIT unfalsifiable pseudoscience",
				status: "established",
			},
			{
				id: "dbtEm3",
				parent: "dbtEm",
				label: "Global Workspace Theory: spotlight broadcast",
				status: "inplay",
			},
			{
				id: "dbtEm3a",
				parent: "dbtEm3",
				label: "Explains access well, phenomenal barely",
				status: "established",
			},
			{
				id: "dbtEm4",
				parent: "dbtEm",
				label: "Computationalism: substrate independence, mind-uploading",
				status: "inplay",
			},
			{
				id: "dbtEm4a",
				parent: "dbtEm4",
				label: "Searle Chinese Room: manipulation does not guarantee understanding",
				status: "established",
			},
			{
				id: "dbtEm5",
				parent: "dbtEm",
				label: "Anil Seth: predictive processing, controlled hallucination",
				status: "inplay",
			},

			{
				id: "dbtNe",
				label: "Non-Emergent Camp: consciousness is fundamental",
				status: "group",
			},
			{
				id: "dbtNe1",
				parent: "dbtNe",
				label: "Advaita reflection theory: mind reflects, does not generate",
				status: "inplay",
			},
			{
				id: "dbtNe1a",
				parent: "dbtNe1",
				label: "Chidabhasa: a semblance of consciousness in the instrument",
				status: "resolved",
			},
			{
				id: "dbtNe2",
				parent: "dbtNe",
				label: "Panpsychism (Goff): ubiquitous, even in electrons",
				status: "inplay",
			},
			{
				id: "dbtNe2a",
				parent: "dbtNe2",
				label: "Combination problem: how do micro-experiences unify?",
				status: "open",
			},
			{
				id: "dbtNe3",
				parent: "dbtNe",
				label: "The Field Hypothesis",
				status: "hypothesis",
			},
			{
				id: "dbtNe3a",
				parent: "dbtNe3",
				label: "Instrument cannot detect the field because it IS the field",
				status: "open",
			},
			{
				id: "dbtNe3b",
				parent: "dbtNe3",
				label: "Defense is structurally identical to IIT unfalsifiability",
				status: "open",
			},
		],
	},
	{
		id: "physics",
		short: "Physics",
		label: "Physics & Boundary Theories",
		summary:
			"Where the field framing meets actual physics, and where it stops being allowed to borrow from it.",
		nodes: [
			{
				id: "phy1",
				label: "Confirmed: wave-particle duality, curved spacetime",
				status: "established",
			},
			{
				id: "phy2",
				label: "CORRECTION: QM does NOT imply consciousness causes collapse",
				status: "resolved",
			},
			{
				id: "phy3",
				label: "Penrose Orch-OR (faces the warm-wet-noisy critique)",
				status: "established",
			},
			{
				id: "phy4",
				label: "Donald Hoffman: spacetime is an interface, not fundamental",
				status: "established",
			},
			{
				id: "phy5",
				label: "PEAR Lab / Global Consciousness Project",
				status: "established",
			},
			{
				id: "phy5a",
				parent: "phy5",
				label: "Bancel 2017: no support found, the 9/11 spike was a fluke",
				status: "established",
			},
		],
	},
	{
		id: "measurement",
		short: "Measurement",
		label: "Measurement & Clinical Realities",
		summary:
			"The strongest empirical ground in the whole map, and the place the whole project runs aground.",
		nodes: [
			{
				id: "msr1",
				label: "Zap-and-zip / PCI: the human-side gold standard",
				status: "established",
			},
			{
				id: "msr1a",
				parent: "msr1",
				label: "Thresholds: wake approx 48 vs NREM / anaesthesia approx 14",
				status: "established",
			},

			{
				id: "msrDis",
				label: "Behavior & Awareness Dissociations",
				status: "group",
			},
			{
				id: "msrDis1",
				parent: "msrDis",
				label: "Locked-in syndrome: high PCI, zero behavior",
				status: "established",
			},
			{
				id: "msrDis2",
				parent: "msrDis",
				label: "REM sleep: high PCI despite full paralysis",
				status: "established",
			},
			{
				id: "msrDis3",
				parent: "msrDis",
				label: "Ketamine: high PCI plus unresponsiveness",
				status: "established",
			},

			{
				id: "msrComa",
				label: "Coma & Vegetative States (UWS)",
				status: "group",
			},
			{
				id: "msrComa1",
				parent: "msrComa",
				label: "Approx 40 percent of vegetative diagnoses are misdiagnoses",
				status: "established",
			},
			{
				id: "msrComa2",
				parent: "msrComa",
				label: "Cognitive Motor Dissociation (CMD): brain reacts to commands but body cannot",
				status: "established",
			},
			{
				id: "msrComa2a",
				parent: "msrComa2",
				label: "25 percent of command non-responders show CMD (2024 study)",
				status: "established",
			},

			{
				id: "msr2",
				label: "MASTER FINDING: every method measures the instrument reading itself",
				status: "open",
			},
			{
				id: "msr2a",
				parent: "msr2",
				label: "Cannot distinguish absence of the field from a broken receiver",
				status: "open",
			},
			{
				id: "msr2b",
				parent: "msr2",
				label: "Practical value survives: CMD detection saves lives despite the stalemate",
				status: "resolved",
			},
			{
				id: "msr3",
				label: "Evan Thompson: dreamless sleep is not a uniform unconscious state",
				status: "established",
			},
		],
	},
	{
		id: "ai",
		short: "AI",
		label: "Artificial Intelligence",
		summary:
			"Not a referee for the metaphysics. A build surface where predictions can actually be run.",
		nodes: [
			{
				id: "ai1",
				label: "AI reframed: a playground for testing predictions, not a referee",
				status: "resolved",
			},
			{
				id: "ai1a",
				parent: "ai1",
				label: "Even a perfect AI would not resolve generation vs reflection",
				status: "open",
			},
			{
				id: "ai2",
				label: "Butlin 2023: 14 indicator properties drawn from 5 theories",
				status: "established",
			},
			{
				id: "ai2a",
				parent: "ai2",
				label: "No current AI satisfies them, but no fundamental barrier exists",
				status: "established",
			},
			{
				id: "ai2b",
				parent: "ai2",
				label: "Framework presupposes computational functionalism",
				status: "established",
			},
			{
				id: "ai3",
				label: "Roadmap: mech interpretability → comp neuro → NeuroAI",
				status: "inplay",
			},
			{
				id: "ai4",
				label: "Neel Nanda pivoting away from circuits is a headwind",
				status: "open",
			},
			{
				id: "ai4a",
				parent: "ai4",
				label: "RESOLUTION: pursue anyway; AI safety is a side effect, not the goal",
				status: "resolved",
			},
			{
				id: "ai5",
				label: "Skeptics: Pistilli (distraction), McClelland (epistemic wall)",
				status: "established",
			},
		],
	},
	{
		id: "biology",
		short: "Biology",
		label: "Biological Distribution",
		summary:
			"Who else is home. The one question both camps can make progress on without agreeing on anything else.",
		nodes: [
			{
				id: "bio1",
				label: "AGREEMENT: both camps agree rocks and thermostats lack it",
				status: "resolved",
			},
			{
				id: "bio2",
				label: "Cambrian explosion: evolved independently 3 times",
				status: "established",
			},
			{
				id: "bio2a",
				parent: "bio2",
				label: "Convergent evolution indicates strong adaptive value",
				status: "established",
			},
			{
				id: "bio3",
				label: "Cambridge 2012 and New York 2024 Declarations on Animal Consciousness",
				status: "established",
			},
			{
				id: "bio4",
				label: "Plant neurobiology (Mancuso vs Taiz)",
				status: "inplay",
			},
			{
				id: "bio4a",
				parent: "bio4",
				label: "UNRESOLVED: but both sides share threshold-based logic",
				status: "open",
			},
			{
				id: "bio5",
				label: "CONCLUSION: distribution is tractable separately from metaphysics",
				status: "resolved",
			},
		],
	},
	{
		id: "subjective",
		short: "Subjective",
		label: "Subjective Investigation",
		summary:
			"First-person method. Useful, and strictly bounded by what a subject can verify from the inside.",
		nodes: [
			{
				id: "sub1",
				label: "Jnana Yoga: inquiry-based, analytic, neti-neti negation",
				status: "inplay",
			},
			{
				id: "sub2",
				label: "Anahata Nada (the sound of silence)",
				status: "inplay",
			},
			{
				id: "sub2a",
				parent: "sub2",
				label: "Science: spontaneous otoacoustic emissions, a real physical cochlear sound",
				status: "established",
			},
			{
				id: "sub2b",
				parent: "sub2",
				label: "RESOLUTION: it is the last rung of content, not the field itself",
				status: "resolved",
			},
			{
				id: "sub2c",
				parent: "sub2",
				label: "Hearing the hum is not hearing the electricity",
				status: "resolved",
			},
			{
				id: "sub3",
				label: "CORE INSIGHT: awareness cannot become its own object",
				status: "resolved",
			},
			{
				id: "sub3a",
				parent: "sub3",
				label: "Turiya: the constant background behind waking, dreaming and sleep",
				status: "inplay",
			},

			{
				id: "subSam",
				label: "Samadhi & Meditation States",
				status: "group",
			},
			{
				id: "subSam1",
				parent: "subSam",
				label: "Laukkonen 2020: measurable drop in brain sync approaching cessation",
				status: "established",
			},
			{
				id: "subSam2",
				parent: "subSam",
				label: "Sahaja (constant) vs Nirvikalpa (induced, temporary)",
				status: "inplay",
			},
			{
				id: "subSam3",
				parent: "subSam",
				label: "BOTTLENECK: no verified case of anyone achieving Sahaja exists",
				status: "open",
			},
		],
	},
	{
		id: "ethics",
		short: "Ethics",
		label: "Ethical & Existential Consequences",
		summary:
			"What actually changes depending on which fork turns out to be true. Two pictures, two sets of stakes.",
		nodes: [
			{
				id: "eth1",
				label: "Identity is where nearly all suffering concentrates",
				status: "inplay",
			},

			{
				id: "ethA",
				label: "PICTURE A: emergent, individual, dualistic",
				status: "inplay",
			},
			{
				id: "ethA1",
				parent: "ethA",
				label: "Death = real, final annihilation of that experience stream",
				status: "inplay",
			},
			{
				id: "ethA2",
				parent: "ethA",
				label: "Singer / Parfit: expanding the circle via rational argument",
				status: "established",
			},

			{
				id: "ethB",
				label: "PICTURE B: non-emergent, non-dual, reflected",
				status: "inplay",
			},
			{
				id: "ethB1",
				parent: "ethB",
				label: "Bhagavad Gita / Spinoza: equal vision, one substance, finite modes",
				status: "established",
			},
			{
				id: "ethB2",
				parent: "ethB",
				label: "Schopenhauer: compassion via piercing the principium individuationis",
				status: "established",
			},
			{
				id: "ethB3",
				parent: "ethB",
				label: "Death: awareness not generated by the body does not end with it",
				status: "inplay",
			},
			{
				id: "ethB4",
				parent: "ethB",
				label: "CAUTION: not a promise that personal memory or identity survives",
				status: "resolved",
			},

			{
				id: "ethC",
				label: "Critiques of Non-Dual Ethics",
				status: "group",
			},
			{
				id: "ethC1",
				parent: "ethC",
				label: "Ramanuja: if the world is illusion, harm is not real → unlivable ethics",
				status: "open",
			},
			{
				id: "ethC2",
				parent: "ethC",
				label: "DEFENSE: two-truths doctrine, conventional ethics fully binding",
				status: "inplay",
			},
		],
	},
	{
		id: "personal",
		short: "Personal & Next",
		label: "Personal Context & Future Bottlenecks",
		summary:
			"Why I am doing this, what could bend my reading of it, and exactly where it is stuck.",
		nodes: [
			{
				id: "per1",
				label: "Depression, emptiness; money and fame cannot give lasting happiness",
				status: "personal",
			},
			{
				id: "per2",
				label: "Author pull toward Advaita / Picture B is explicitly monitored",
				status: "personal",
			},
			{
				id: "per2a",
				parent: "per2",
				label: "No proposed test for generation vs reflection",
				status: "open",
			},
			{
				id: "per3",
				label: "Explicit disclaimer: non-mystical, experience and reasoning only",
				status: "personal",
			},

			{
				id: "perStuck",
				label: "WHERE THE PROJECT IS STUCK",
				status: "group",
			},
			{
				id: "perStuck1",
				parent: "perStuck",
				label: "Can awareness exist without content?",
				status: "open",
			},
			{
				id: "perStuck2",
				parent: "perStuck",
				label: "Anatta (Buddhist no-self) vs Atman (Advaita Self)",
				status: "open",
			},

			{
				id: "perPlan",
				label: "PLANNED WRITING",
				status: "group",
			},
			{
				id: "perPlan1",
				parent: "perPlan",
				label: "Anatta vs Atman deep dive",
				status: "planned",
			},
			{
				id: "perPlan2",
				parent: "perPlan",
				label: "Sahaja vs Nirvikalpa samadhi in depth",
				status: "planned",
			},
			{
				id: "perPlan3",
				parent: "perPlan",
				label: "Observer equals observed: moral implications",
				status: "planned",
			},
			{
				id: "perPlan4",
				parent: "perPlan",
				label: "Continued AI testing as interpretability matures",
				status: "planned",
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
