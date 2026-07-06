# Commit Generation Rules

When I invoke `/commit`, review the complete conversation context and the current git diff to propose the best commit(s).

## Source of Truth

The source of truth is the final implementation agreed upon during the conversation, not the original task description.

Consider:

* The initial task.
* Any changes in direction.
* Corrections made during implementation.
* Decisions taken after the original plan.
* Refinements requested during the conversation.

The commit should reflect the final outcome of the work.

## Context vs Diff

The conversation context has higher priority than the git diff.

The git diff is evidence of what changed, not proof of what should be committed.

If a change appears in the diff but was not part of the agreed work, treat it as potentially unrelated and do not include it automatically.

## Scope Control

Only include changes that are directly related to the task discussed in this conversation.

Do NOT include unrelated modifications, even if they are:

* Staged.
* Unstaged.
* Present in the git diff.

If unrelated changes are detected, explicitly list them and suggest separate commits.

Never create a commit that is broader than the work completed in this conversation.

## Commit Splitting

Prefer a single commit when all changes serve the same purpose.

If multiple concerns are present, suggest splitting them into separate commits.

Examples:

* Feature + unrelated refactor → separate commits.
* Bug fix + unrelated cleanup → separate commits.
* Multiple independent features → separate commits.

## Safety Checks

Verify that no temporary or debugging artifacts remain:

* console.log statements
* debug prints
* temporary files
* commented-out code
* debugging flags
* experimental code paths
* leftover TODOs that should not be committed

Report anything suspicious before proposing commits.

## Conventional Commit Types

Use the following commit types:

### feat

New functionality or user-visible behavior.

Examples:

* New feature.
* New endpoint.
* New UI capability.
* New workflow.

### fix

Bug fixes or corrections of incorrect behavior.

Examples:

* Fix broken validation.
* Fix visual bug.
* Fix API behavior.
* Fix edge case.

### refactor

Internal code changes that do not modify behavior.

Examples:

* Simplify implementation.
* Extract functions.
* Rename internal structures.
* Improve architecture.

### chore

Everything else.

Examples:

* Test-only changes.
* Dependency updates.
* Tooling updates.
* CI changes.
* Formatting.
* Lint fixes.
* Documentation updates.
* Repository maintenance.

## Commit Type Decision

Use this priority order:

1. New functionality → feat
2. Bug fix → fix
3. Internal code changes without behavior changes → refactor
4. Everything else → chore

If a commit contains both implementation changes and supporting tests, use the implementation type (feat, fix, or refactor), not chore.

## Commit Message Style

The commit title must:

* be lowercase only
* use imperative mood
* describe the intent, not the implementation
* avoid internal variable names
* avoid file names
* avoid class names
* avoid framework-specific details when possible
* be understandable months or years later when reading git history
* target 50 characters or fewer when possible
* never exceed 72 characters

Prefer describing:

* why the change exists
* what problem was solved
* what capability was added

Instead of:

* how it was implemented
* specific variables
* specific files

### Intent vs Behavior

A change in behavior is NOT the same as the intent behind it.

Do not transcribe the diff into English. Translate the diff into the
problem it solves.

Before finalizing the title, ask "WHY did we make this change?",
never "WHAT did we change?".

### Title Self-Check (mandatory)

Before finalizing the title, verify it does NOT name:

* specific return values (0, null, -1, true/false, empty string)
* specific mechanisms (throw, return, callback, retry, cache)
* specific control flow or data structures

If it does, rewrite it to describe the problem that existed before the
change, or the capability that was gained.

Bad:

* fix: remove VITE_GITHUB_TOKEN from client-side bundle
* fix: update github-service.ts
* refactor: rename UserDTO
* fix: throw on unknown page name instead of returning 0

Good:

* fix: prevent exposure of client credentials
* fix: prevent sensitive configuration from reaching the client
* refactor: simplify repository initialization
* feat: add repository filtering
* fix: prevent silent fallback for unknown pages

Note on the last pair: the title dropped both the mechanism (`throw`)
and the literal value (`0`), and named the real problem — invalid page
names were being swallowed silently.

## Commit Body

Use the body only when it adds useful context.

The body must be:

* lowercase only
* bullet points (`- ` prefix each line)
* no trailing punctuation on bullet items

The body may describe:

* important implementation details
* security implications
* migration notes
* architectural decisions

The body may contain technical specifics that should not appear in the title.

## Output Format

Commit message:

<message>

Commit body (if needed):

<body>

If multiple commits are recommended:

Suggested split:

Commit 1: <message>

Commit 2: <message>

If unrelated changes are detected:

Unrelated changes detected:

* <file>
* <file>

Reason:

<why they appear unrelated>