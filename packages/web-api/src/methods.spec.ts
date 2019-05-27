import 'mocha';
import { assert } from 'chai';
import { ChatPostMessageArguments } from './methods';

// TODO: https://github.com/microsoft/dtslint

describe('Methods arguments', () => {
  it('should compile chat.postMessage with text', () => {
    const postMessage: ChatPostMessageArguments = {
      channel: 'C0000',
      text: 'Something great'
    };
    assert.isNotNull(postMessage);
  });
  it('should compile chat.postMessage with attachments', () => {
    const postMessage: ChatPostMessageArguments = {
      channel: 'C0000',
      attachments: [
        {
          "text": "Something great"
        }
      ]
    };
    assert.isNotNull(postMessage);
  });
  it('should compile chat.postMessage with blocks', () => {
    const postMessage: ChatPostMessageArguments = {
      channel: 'C0000',
      blocks: [
        {
          "type": "context",
          "elements": [
            {
              "type": "plain_text",
              "text": "Something great"
            }
          ]
        }
      ]
    };
    assert.isNotNull(postMessage);
  });
});