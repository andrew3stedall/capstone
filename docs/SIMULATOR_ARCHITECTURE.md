# Simulator Architecture

## Objective

Create a scalable practical-learning engine that can represent electrical components, terminal connections, switching states, test points and faults without hard-coding a separate implementation for every exercise.

The simulator is an educational model, not an engineering design or certification tool.

## Core subsystems

```text
Circuit definition
    ↓
Node-graph engine
    ↓
State and switching engine
    ↓
Fault injection engine
    ↓
Instrument/test engine
    ↓
Assessment and feedback engine
    ↓
UI renderer and activity log
```

## Graph model

- **Node**: an electrical terminal or electrically common point.
- **Edge**: a conductor, internal component connection or temporary test lead.
- **Component**: a collection of terminals plus behaviour.
- **State**: switch position, protective-device state, supply state and fault state.
- **Net**: terminals connected through zero- or low-resistance paths under the current state.

Example component types:

- supply source;
- main switch;
- MCB/fuse abstraction;
- RCD abstraction;
- one-way, two-way and intermediate switches;
- socket outlet;
- luminaire/load;
- motor/transformer abstractions;
- neutral bar;
- earth bar;
- MEN connection;
- earth electrode abstraction;
- terminal block;
- test point.

## Why simple connectivity is not enough

A basic undirected graph can support early continuity exercises, but realistic behaviour eventually requires:

- switch-dependent internal edges;
- conductor roles and phases;
- source and load semantics;
- resistance/impedance attributes;
- test voltage and instrument mode;
- parallel paths;
- RCD current-balance logic;
- protective-device operating constraints;
- energised versus de-energised states;
- hazardous-state detection.

Start with deterministic educational rules. Do not attempt full SPICE-style analogue simulation unless a validated learning need emerges.

## Suggested data model

```ts
type Terminal = {
  id: string;
  componentId: string;
  label: string;
  role: "active" | "neutral" | "earth" | "control" | "generic";
  phase?: "L1" | "L2" | "L3";
};

type Connection = {
  id: string;
  fromTerminalId: string;
  toTerminalId: string;
  conductorType: "active" | "neutral" | "earth" | "strapper" | "generic";
  resistanceOhms?: number;
  installedBy: "scenario" | "learner" | "fault";
};

type ComponentState = {
  componentId: string;
  position?: string;
  open?: boolean;
  tripped?: boolean;
};
```

## Circuit definitions

A scenario should define:

- learning objective;
- board layout;
- available components;
- starting connections;
- permitted learner actions;
- correct topology or accepted topology set;
- fault candidates;
- supported tests;
- safety gates;
- scoring rubric;
- hints and explanations;
- standards/reference metadata.

## Initial circuit exercises

1. One-way lighting control
2. Two-way switching
3. Intermediate switching
4. Socket-outlet radial circuit
5. Basic switchboard component arrangement
6. RCD-protected final subcircuit concept
7. Neutral and earth separation concepts
8. MEN conceptual arrangement
9. Combined practice board

These are educational exercise families, not a claim that every RTO uses the same physical capstone board.

## Fault engine

Faults should transform a valid scenario in controlled, testable ways:

- remove an edge: open conductor;
- alter resistance: high-resistance joint;
- swap terminal destinations: reversed connection;
- add unintended edge: short or insulation fault abstraction;
- bypass component: protection/control bypass;
- change component state: stuck/open/failed device;
- mislabel conductor or terminal;
- introduce alternate supply or stored-energy state.

Each fault definition needs:

- physical meaning;
- graph transformation;
- expected symptoms;
- tests that can detect it;
- misleading but plausible evidence;
- safe diagnostic path;
- repair action;
- learning explanation.

## Instrument engine

Initial virtual instruments:

- continuity/low-resistance function;
- insulation resistance tester;
- voltage indicator or multimeter abstraction;
- polarity test workflow;
- loop impedance tester abstraction;
- RCD tester abstraction.

Instrument interactions should require:

- correct instrument;
- correct mode/range where educationally relevant;
- correct probe locations;
- correct supply state;
- appropriate isolation or energisation preconditions;
- interpretation of results.

Readings should come from scenario rules and graph state. Values need controlled tolerances and must not imply universal acceptance thresholds where standards, device data or RTO procedures vary.

## Safe-isolation state machine

Model isolation as a process rather than a checkbox:

1. identify equipment and all possible sources;
2. determine isolation point(s);
3. operate isolation device(s);
4. secure against reconnection where required;
5. identify and manage stored or alternate energy;
6. prove the tester on a known source;
7. test relevant conductors/points;
8. re-prove the tester;
9. maintain control of the isolation.

Exact training language and workflow must be validated for jurisdiction and RTO.

## Assessment engine

Score separate dimensions:

- topology/result correctness;
- procedural order;
- instrument selection;
- probe placement;
- result interpretation;
- safety-critical actions;
- unnecessary or unsafe actions;
- diagnosis;
- repair and re-verification;
- documentation.

Safety-critical actions can gate completion. A learner should not receive a high overall score after a dangerous process merely because the final connection is correct.

## UI interaction

### Desktop

- click/drag from terminal to terminal;
- keyboard-operable alternative;
- pan and zoom;
- inspect or remove selected conductors;
- instrument leads represented separately from installed wiring.

### Mobile

- tap source, then destination;
- large terminal targets;
- snap-to-terminal;
- clear selected-terminal state;
- bottom-sheet component and tool controls;
- easy undo.

## Modes

- **Learning**: path tracing, hints, expected outcomes and explanations.
- **Practice**: limited hints and feedback after each stage.
- **Assessment**: no hints, controlled evidence, process log and final report.

## Technology direction

Current Next.js/React/TypeScript stack is suitable. Prefer SVG or a purpose-built graph/canvas layer for board rendering. React Flow may accelerate an early prototype, but its general node-editor interaction may need substantial customisation for realistic terminals and test leads.

Keep the graph and assessment engines independent from rendering so they can be unit tested and later reused in mobile or alternative interfaces.