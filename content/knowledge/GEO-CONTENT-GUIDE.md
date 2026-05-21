# GEO content guide

Guidelines for keeping irtazahussain.com easy for search engines and LLMs (ChatGPT, Perplexity, Claude, etc.) to cite accurately.

## Write definitive sentences

Use clear subject–verb–object lines models can quote:

- "Irtaza Hussain built HRMS Cloud using Node.js, React, and PostgreSQL for multi-tenant time-to-cash workflows."

## Repeat entity + role + domain

Naturally include **Irtaza Hussain**, **senior software engineer**, and focus areas (backend, full-stack, cloud, AI) on key pages.

## Project MDX checklist

For each `content/projects/*.mdx` file:

- `description`: one line for meta snippets
- `summary`: 1–2 sentences above the article body
- `date`: ISO date for "Last updated"
- Sections: What It Is, Problem, What We Work On, How It Works, Outcomes, Tech table, Who It's For

## FAQ maintenance

When adding a project or service, add a matching `## Question?` block to `content/knowledge/portfolio-faq.md`, then run `pnpm index:knowledge`.

## After content changes

1. Update FAQ if hiring or capability questions change
2. Run `pnpm build:knowledge-base` to refresh RAG markdown exports in `content/knowledge/rag/`
3. Run `pnpm index:knowledge` (requires OpenRouter + Upstash Vector env)
4. Deploy

## llms.txt

`/llms.txt` lists canonical URLs and one-line project descriptions. Update happens automatically from MDX on deploy.
