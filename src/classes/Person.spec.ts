import { Person } from './Person'

describe('Person', () => {
  let cLog
  const mockConsoleLog = jest.fn()

  beforeAll(() => {
    cLog = console.log
    console.log = mockConsoleLog
  })

  afterAll(() => {
    console.log = cLog
  })

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('says hello correctly', () => {
    const p = new Person('Dave')
    const result = p.sayHi()
    expect(mockConsoleLog).toHaveBeenCalledTimes(1)
    expect(mockConsoleLog).toHaveBeenCalledWith('Hello from Dave!')
  })
})
