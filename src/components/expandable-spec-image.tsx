"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

type ExpandableSpecImageProps = {
  compact?: boolean;
};

export function ExpandableSpecImage({ compact = false }: ExpandableSpecImageProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {compact ? (
          <button type="button" className="specInlineTrigger" aria-label="Expand product specification drawing">
            View drawing
          </button>
        ) : (
          <button type="button" className="specImageTrigger" aria-label="Expand product specification drawing">
            <Image
              src="/images/pages/resonate-drawing.png"
              alt="Technical drawing of the Resonate Adaptive device"
              width={1200}
              height={800}
              className="productDrawingImage"
            />
            <span className="specImageHint">Tap to expand</span>
          </button>
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="specDialogOverlay" />
        <Dialog.Content className="specDialogContent" aria-label="Expanded product specification drawing">
          <Image
            src="/images/pages/resonate-drawing.png"
            alt="Technical drawing of the Resonate Adaptive device"
            width={1600}
            height={1067}
            className="specDialogImage"
          />
          <Dialog.Close className="specDialogClose" aria-label="Close expanded drawing">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
