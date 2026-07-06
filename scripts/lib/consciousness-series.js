export const CONSCIOUSNESS_SERIES = [
	{
		num: 1,
		file: "Why I Got Interested in Consciousness 38f28ce9750c807b80befea667032921.md",
		title: "Why I Got Interested in Consciousness",
		slug: "why-i-got-interested-in-consciousness",
		publishedAt: "2026-07-01T10:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Person in quiet contemplation",
	},
	{
		num: 2,
		file: "The Case for Studying Consciousness 39028ce9750c808ebc4bf11358e8339f.md",
		title: "The Case for Studying Consciousness",
		slug: "the-case-for-studying-consciousness",
		publishedAt: "2026-07-02T11:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Earth at night seen from space",
	},
	{
		num: 3,
		file: "What Is Consciousness 39128ce9750c8003b0f4e5315d56fe7d.md",
		title: "What Is Consciousness",
		slug: "what-is-consciousness",
		publishedAt: "2026-07-04T09:30:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Abstract colorful light refraction",
	},
	{
		num: 4,
		file: "How Does Awareness Get Here Emergent and Non-Emerg 39228ce9750c8081ad7efbbae4951e27.md",
		title: "How Does Awareness Get Here? Emergent and Non-Emergent Accounts",
		slug: "how-does-awareness-get-here-emergent-and-non-emergent-accounts",
		publishedAt: "2026-07-05T14:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Abstract neural network visualization",
	},
	{
		num: 5,
		file: "Testing Consciousness in Silicon What AI Can (and  39328ce9750c80ee9184ca2493daf692.md",
		title: "Testing Consciousness in Silicon: What AI Can (and Can't) Teach Us",
		slug: "testing-consciousness-in-silicon-what-ai-can-and-can-t-teach-us",
		publishedAt: "2026-07-07T10:30:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Artificial intelligence and computing concept",
	},
	{
		num: 6,
		file: "If Consciousness Is Reflected, What Is Doing the R 39328ce9750c80c2bbbbf0990b7bcb19.md",
		title: "If Consciousness Is Reflected, What Is Doing the Reflecting?",
		slug: "if-consciousness-is-reflected-what-is-doing-the-reflecting",
		publishedAt: "2026-07-08T15:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Mountain peaks above clouds at dawn",
	},
	{
		num: 7,
		file: "The Sound That Isn't Supposed to Be There 39428ce9750c8078bdbaedbfa04b6d53.md",
		title: "The Sound That Isn't Supposed to Be There",
		slug: "the-sound-that-isn-t-supposed-to-be-there",
		publishedAt: "2026-07-10T09:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Headphones on a wooden surface",
	},
	{
		num: 8,
		file: "Who Else Is Home Animals, Plants, and the Things T 39428ce9750c806c8a26c4937d622421.md",
		title: "Who Else Is Home? Animals, Plants, and the Things That Clearly Aren't",
		slug: "who-else-is-home-animals-plants-and-the-things-that-clearly-aren-t",
		publishedAt: "2026-07-11T12:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1425082661705-5134fe993339?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Small mouse in natural habitat",
	},
	{
		num: 9,
		file: "Two Worlds What Follows If Consciousness Is Mine A 39528ce9750c8093900bec7ed3acb6b6.md",
		title: "Two Worlds: What Follows If Consciousness Is Mine Alone, or Not",
		slug: "two-worlds-what-follows-if-consciousness-is-mine-alone-or-not",
		publishedAt: "2026-07-13T10:00:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Sunlight through forest canopy",
	},
	{
		num: 10,
		file: "Awake, Asleep, Comatose What Measurement Actually  39528ce9750c805cb5f0f959c4dfdf68.md",
		title: "Awake, Asleep, Comatose: What Measurement Actually Shows, and What It Doesn't",
		slug: "awake-asleep-comatose-what-measurement-actually-shows-and-what-it-doesn-t",
		publishedAt: "2026-07-15T08:30:00.000Z",
		imageUrl:
			"https://images.unsplash.com/photo-1559757142-6d478c161025?w=1400&q=80&auto=format&fit=crop",
		imageAlt: "Human brain scan visualization",
	},
];

export function articleLink(num) {
	const article = CONSCIOUSNESS_SERIES[num - 1];
	if (!article) return `article ${num}`;
	return `[${article.title}](/blog/${article.slug})`;
}

export function linkifySeriesReferences(text, articleNum) {
	let result = text;

	result = result.replace(
		/footnote (\d+) of the previous article/gi,
		(_, fn) => `footnote ${fn} of ${articleLink(articleNum - 1)}`
	);

	if (articleNum >= 3) {
		result = result.replace(
			/the last two articles/gi,
			() => `${articleLink(articleNum - 2)} and ${articleLink(articleNum - 1)}`
		);
	}

	if (articleNum > 1) {
		result = result.replace(
			/the last (article|piece)/gi,
			() => articleLink(articleNum - 1)
		);
		result = result.replace(
			/from the last article/gi,
			() => `from ${articleLink(articleNum - 1)}`
		);
		result = result.replace(
			/in the last article/gi,
			() => `in ${articleLink(articleNum - 1)}`
		);
		result = result.replace(
			/the previous article/gi,
			() => articleLink(articleNum - 1)
		);
		result = result.replace(
			/in the previous article/gi,
			() => `in ${articleLink(articleNum - 1)}`
		);
		result = result.replace(
			/I discussed in the previous article/gi,
			() => `I discussed in ${articleLink(articleNum - 1)}`
		);
	}

	result = result.replace(/\b[Aa]rticle (\d+)\b/g, (_, n) =>
		articleLink(parseInt(n, 10))
	);

	return result;
}
