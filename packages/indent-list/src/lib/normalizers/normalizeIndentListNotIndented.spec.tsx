/** @jsx jsxt */

import type { SlateEditor } from '@udecode/plate';

import { createPlateEditor } from '@udecode/plate/react';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { jsxt } from '@udecode/plate-test-utils';

import { BaseIndentListPlugin } from '../BaseIndentListPlugin';

jsxt;

describe('normalizeIndentList', () => {
  describe('when listStyleType without indent', () => {
    it('should remove listStyleType and listStart props', async () => {
      const input = (
        <editor>
          <hp listStart={1} listStyleType="disc">
            1
          </hp>
        </editor>
      ) as any as SlateEditor;

      const output = (
        <editor>
          <hp>1</hp>
        </editor>
      ) as any as SlateEditor;

      const editor = createPlateEditor({
        plugins: [BaseIndentListPlugin, IndentPlugin],
        selection: input.selection,
        shouldNormalizeEditor: true,
        value: input.children,
      });

      expect(editor.children).toEqual(output.children);
    });
  });
});
