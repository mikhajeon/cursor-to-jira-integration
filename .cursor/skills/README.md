# Project skills

Skills in this folder are used by the agent when your request matches their scope.

**How Cursor finds them:** There is no single `cursor.md` file. Cursor (1) auto-discovers skills in `.cursor/skills/*/SKILL.md` and uses each skill’s `name` and `description` to decide when to use it, and (2) applies **rules** in `.cursor/rules/*.mdc`, which can tell the agent to read a skill. For user stories we use both: a rule in `.cursor/rules/user-stories-skill.mdc` explicitly tells the agent to read this skill when you ask about user stories or acceptance criteria.

| Skill | When to reference |
|-------|---------------------|
| **user-stories-formatting** | Creating, reviewing, or refining user stories and acceptance criteria; breaking down epics; formatting for Jira/Confluence |
