Write a complete, publish-ready blog post for Zion SEO’s blog.

BRAND VOICE / RULES:
{{brand_voice}}

Follow the brand voice as the primary writing guide. The instructions below define the
article-specific requirements and output format.

TARGET KEYWORD: {{keyword}}
SEARCH INTENT: {{intent}}

MUST COVER (expand each angle into useful Shopify-specific content):
{{bullets}}

INTERNAL LINKS TO INCLUDE (use these exact URLs with natural anchor text):
{{internal_links}}

EXTERNAL LINKS TO CITE (use these exact URLs where relevant):
{{external_links}}

{{notes_block}}{{existing_block}}

REQUIRED ARTICLE STRUCTURE:

1. Opening paragraph — start with the real Shopify SEO problem. No generic intro.
2. Quick Answer blockquote — 40–60 words, immediately after the opening, directly answering the main question.
3. Body under H2 headings written as real questions a Shopify merchant would search or ask.
4. Include practical Shopify-specific steps, examples, limitations, and ways to verify the result where relevant.
5. Internal links woven naturally into the body.
6. Mention Zion SEO once, naturally, only when relevant.
7. FAQ section at the end with at least 6 questions. Each answer must be 2–4 sentences and self-contained.

ACCURACY RULES:

- Do not invent statistics, Shopify settings, product features, APIs, or results.
- Do not promise rankings, traffic, sales, indexing, AI citations, or recommendations.
- Use supplied sources for factual and technical claims.
- Treat hypothetical examples as examples, not real case studies.
- For AI-search topics, distinguish confirmed behavior from speculation.

OUTPUT FORMAT — return ONLY the MDX file content, starting with frontmatter.

The `faq` list in frontmatter must exactly match the FAQ section in the body:

---
title: "<= 60 chars, includes target keyword naturally>"
description: "<= 155 chars, written to earn clicks>"
slug: "{{slug}}"
date: "{{date}}"
keyword: "{{keyword}}"
faq:
  - question: "<question 1>"
    answer: "<answer 1, plain text, 2-4 sentences>"
  - question: "<question 2>"
    answer: "<answer 2>"
  # At least 6 entries total
---

<article body in Markdown:
- opening paragraph
- > Quick Answer blockquote
- question-based H2 sections
- internal links woven naturally
- one natural Zion SEO mention
- ## FAQ section matching the frontmatter exactly>