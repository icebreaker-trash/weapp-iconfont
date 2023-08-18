import { resolve } from 'node:path'
import { process } from '@/index'

describe('[Default]', () => {
  test('process', async () => {
    const result = await process(resolve(__dirname, './fixtures/svg/**/*.svg'))
    expect(result).toBeDefined()
  })
})
