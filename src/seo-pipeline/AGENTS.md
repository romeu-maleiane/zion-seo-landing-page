
# Zion SEO Blog Pipeline — Agent Instructions

This file is the mission document for any agent working in this project.

Read it fully before doing anything. It defines two recurring jobs: **Research & Publish**
and **Rank Review & Double-Down**.

Keep a human review gate before anything is merged into the main branch. Research, drafting,
QA, and refresh preparation can run unattended, but the agent must never merge its own PR.

Product context: Zion SEO is a Shopify SEO app that helps merchants improve product content,
metadata, keyword targeting, and overall organic visibility.

Primary audience: Shopify merchants, ecommerce founders, store managers, and marketers who
want to improve rankings, organic traffic, product pages, collections, and AI discovery.

The content strategy must cover the broader Shopify SEO niche, not only Zion SEO features.

MCP tool required: **OpenSEO** (`https://app.openseo.so/mcp`).

Confirm it is connected before starting either job. If it is not connected, stop and ask the
human to connect it in Settings → MCP Servers rather than guessing keyword or ranking data.

---

## Job 1 — Research & Publish (run 1–2x/week)

1. **Research keywords with OpenSEO MCP**, not from memory.

   Choose one pillar from `seo-pipeline/topics_seed.yaml`, call `research_keywords` on its
   seed terms, then call `get_serp_results` on the 3–5 strongest candidates.

   Choose 2–3 keywords for briefs.

   Prioritize keywords that are:

   - Relevant to Shopify SEO
   - Long-tail or clearly focused
   - Low-to-medium difficulty when possible
   - Matched to real merchant problems
   - Not already covered by an existing post
   - Aligned with the current SERP intent

   Do not focus only on Zion features. Cover Shopify SEO fundamentals, product pages,
   collections, technical SEO, keyword research, indexing, content strategy, tools, and
   AI search.

2. **Write bullet-point briefs**, not full outlines.

   For each keyword, append an entry to `seo-pipeline/topics_queue.yaml` with:

   - `keyword`
   - `intent`
   - `search_volume`
   - `difficulty`
   - `pillar`
   - 4–6 bullet points covering the required angles
   - `internal_links`: 1–3 real Zion SEO pages
   - `external_links`: 1–2 authoritative sources

   Use only real URLs from `internal_pages` in `topics_seed.yaml`.

   Prefer official sources such as Shopify documentation, Google Search Central, Schema.org,
   and original research.

3. **Generate drafts** by running:

   ```bash
   python src/seo-pipeline/blog.py --topic-id <id>
   ````

The script should use `brand-voice.md`, write the MDX draft to the blog directory, and
mark the queue entry as:

   ```yaml
   status: drafted
   ```

4. **Update internal pages after generation.**

   After a post is successfully generated, append it to `internal_pages` in:

   ```text
   seo-pipeline/topics_seed.yaml
   ```

   Use:

   ```yaml
   - url: "https://<zion-domain>/blog/<slug>"
     topic: "<post title>"
   ```

   Use the real production domain. Do not invent or hardcode an unconfirmed URL.

5. **Run a QA pass** before opening a PR.

   Confirm that:

   * The opening starts with a real Shopify SEO problem
   * The Quick Answer appears after the opening and contains 40–60 words
   * Every H2 except FAQ is phrased as a real question
   * The article matches the current SERP intent
   * Shopify instructions are specific and accurate
   * Meta title is ≤ 60 characters
   * Meta description is ≤ 155 characters
   * The target keyword appears naturally in the title, description, H1, first 100 words,
     and at least one H2 when appropriate
   * Internal links resolve and are woven naturally into the body
   * FAQ contains at least 6 real questions from SERP or People Also Ask data
   * FAQ frontmatter matches the generated FAQPage JSON-LD
   * Technical claims use authoritative sources
   * No Zion feature is mentioned unless it exists
   * No ranking, traffic, sales, indexing, citation, or recommendation is guaranteed
   * The article reads like Shopify SEO guidance, not generic AI filler

6. **Open a PR**, never push directly to main.

   Use:

   ```text
   blog: <keyword>
   ```

   Include in the PR description:

   * Keyword
   * Search intent
   * Search volume
   * Difficulty
   * Brief
   * Main SERP observations
   * Internal and external links used

   Wait for human review. Do not self-merge.

7. Mark the queue entry as:

   ```yaml
   status: published
   ```

   only after the PR is merged.

---

## Job 2 — Rank Review & Double-Down (run weekly)

Run this job for posts published approximately 7–30 days ago.

This job has higher priority than publishing more new content.

1. Use `openseo.get_gsc_performance` or `get_rank_tracker` to retrieve:

   * Clicks
   * Impressions
   * CTR
   * Average position
   * Ranking queries
   * Position changes

2. Classify each post:

   * **Early riser**: position 8–25, rising impressions, relevant ranking queries, or low CTR
   * **Flat/no signal**: negligible impressions after at least two weeks
   * **Ranking well**: top 10 with stable or growing performance
   * **Cannibalization risk**: multiple Zion posts ranking for the same intent

3. For each early riser, review the current SERP again and run:

   ```bash
   python src/seo-pipeline/blog.py --refresh <slug> --notes "<what OpenSEO data suggests>"
   ```

   Typical improvements:

   * Improve title or meta description for CTR
   * Align the opening with real ranking queries
   * Strengthen the Quick Answer
   * Add missing People Also Ask questions
   * Improve Shopify-specific instructions
   * Add internal links
   * Expand sections competitors cover better
   * Update outdated Shopify information
   * Correct unsupported AI-search claims

4. Open one PR per refreshed post:

   ```text
   refresh: <slug>
   ```

   Include previous performance, current performance, ranking queries, changes made, and
   the reason for the refresh.

5. Log the experiment in:

   ```text
   content/briefs/refresh-log.md
   ```

   Record:

   * Slug
   * Date
   * Target keyword
   * Previous position
   * Impressions
   * CTR
   * Changes made
   * Hypothesis
   * Result after review

---

## Guardrails

* Never fabricate keyword volume, difficulty, SERP data, rankings, clicks, impressions, or CTR.
* Never invent Zion SEO URLs.
* Never publish directly to main.
* Never self-merge a PR.
* Never mark a post as published before the PR is merged.
* Never invent Shopify settings, features, APIs, or limitations.
* Never claim guaranteed rankings, traffic, sales, indexing, AI citations, or recommendations.
* Never present hypothetical examples as real case studies.
* Never use outdated competitor pricing or features without checking them.
* If OpenSEO fails or appears rate-limited, stop and report the issue.
* Avoid publishing multiple posts with the same search intent.
* Do not over-focus on product descriptions, metadata, `llms.txt`, `agents.md`, GEO, or AI search.
* Maintain broad topical coverage of Shopify SEO.
* Cap new content at a level the weekly rank-review job can properly maintain.

```
```
