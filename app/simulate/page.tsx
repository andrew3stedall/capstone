import { PageHeader } from "@/components/ui/PageHeader";
import { SourceNotice } from "@/components/ui/SourceNotice";
import { SimulatorFoundation } from "@/features/simulate/SimulatorFoundation";

export const metadata = { title: "Simulate" };
export default function SimulatePage() { return <div className="page-container"><PageHeader eyebrow="Simulate" title="Learn practical sequences by doing." description="This Milestone 2 foundation establishes the route and accessible interaction model for the later circuit, instrument and fault engines." /><SimulatorFoundation /><SourceNotice /></div>; }
