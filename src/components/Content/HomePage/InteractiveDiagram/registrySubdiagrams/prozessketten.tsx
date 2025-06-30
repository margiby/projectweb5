import { tryRegisterDiagram } from "../utils/diagramRegistry";
import { createTreeDiagram } from "../utils/diagramFactory";
import { Position } from "@xyflow/react";
import type { ElkLayoutOptions } from "../utils/elkLayout-utils";
import type { DiagramFactoryOptions, TreeFactoryNodeConfig } from "../data/flow-types";

/**
 * Registriert das Prozessketten-Subdiagramm.
 * @param treeConfig Die hierarchische Konfiguration des Diagramms.
 */
export function registerProzesskettenSubdiagram(treeConfig: TreeFactoryNodeConfig): void {
  const diagramId = "prozessketten";

  tryRegisterDiagram(diagramId, () => {
    console.log("AKTION: Registriere Prozessketten Sub-Diagramm...");

    // ELK-Layout-Optionen für eine Baumstruktur
    const elkOptions: ElkLayoutOptions = {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "80",
      "org.eclipse.elk.spacing.nodeNode": "25",
      "org.eclipse.elk.layered.considerModelOrder.strategy": "PORTS_EAST_WEST",
      "org.eclipse.elk.layered.nodePlacement.strategy": "LINEAR_SEGMENTS",
      "org.eclipse.elk.portConstraints": "FIXED_SIDE",
    };

    const options: DiagramFactoryOptions = {
      elkOptions,
      defaultTargetPosition: Position.Left,
      defaultSourcePosition: Position.Right,
      defaultClassName: "tech-item-node",
    };

    // Erstelle das Diagramm mit der Tree-Factory
    createTreeDiagram(diagramId, treeConfig, options);
  });
}