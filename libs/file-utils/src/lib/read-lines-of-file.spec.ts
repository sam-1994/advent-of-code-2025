import fs from 'fs';
import path from 'path';
import { readLinesOfFile } from './read-lines-of-file';

describe('readLinesOfFile', () => {
  let tempFile: string;

  beforeEach(() => {
    tempFile = path.join(__dirname, 'temp-test-file.txt');
  });

  afterEach(() => {
    if (fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }
  });

  test('reads lines from a file correctly', () => {
    const content = `line1\nline2\nline3`;
    fs.writeFileSync(tempFile, content, 'utf-8');

    const lines = readLinesOfFile(tempFile);

    expect(lines).toEqual(['line1', 'line2', 'line3']);
  });

  test('returns an array with one empty string for an empty file', () => {
    fs.writeFileSync(tempFile, '', 'utf-8');

    const lines = readLinesOfFile(tempFile);

    expect(lines).toEqual(['']);
  });

  test('keeps empty lines intact', () => {
    const content = `a\n\nb`;
    fs.writeFileSync(tempFile, content, 'utf-8');

    const lines = readLinesOfFile(tempFile);

    expect(lines).toEqual(['a', '', 'b']);
  });

  test('throws an error if the file does not exist', () => {
    expect(() => readLinesOfFile('non-existing-file.txt')).toThrow();
  });
});
