/** @jsx jsxt */

import type { SlateEditor } from '@udecode/plate';

import { createSlateEditor } from '@udecode/plate';
import { jsxt } from '@udecode/plate-test-utils';

import { SUGGESTION_KEYS } from '../BaseSuggestionPlugin';
import { BaseSuggestionPlugin } from '../BaseSuggestionPlugin';
import { addSuggestionMark } from './addSuggestionMark';

jsxt;

describe('addSuggestionMark', () => {
  // describe('when editor.activeSuggestionId is defined', () => {
  //   it('should not add marks', () => {
  //     const input = ((
  //       <editor>
  //         <hp>
  //           test
  //           <cursor />
  //         </hp>
  //       </editor>
  //     ) as any) as SlateEditor;
  //
  //     const editor = createSlateEditor({
  //       value: input.children,
  //    selection: input.selection,
  //     });
  //     editor.activeSuggestionId = 'active_suggestion_id';
  //
  //     addSuggestionMark(editor);
  //
  //     expect(editor.marks).toBeNull();
  //   });
  // });

  describe('when editor.activeSuggestionId is not defined', () => {
    describe('when editor.marks?.[SuggestionPlugin.key] is not defined', () => {
      it('should add marks', () => {
        const input = (
          <editor>
            <hp>
              test
              <cursor />
            </hp>
          </editor>
        ) as any as SlateEditor;

        const editor = createSlateEditor({
          selection: input.selection,
          value: input.children,
        });

        addSuggestionMark(editor);
        expect(editor.marks?.[BaseSuggestionPlugin.key]).toBeTruthy();
        expect(editor.marks?.[SUGGESTION_KEYS.id]).toBeTruthy();
      });
    });
  });
});
