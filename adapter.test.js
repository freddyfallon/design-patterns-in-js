const fakeDbAdapter = require('./adapter')

describe('fakeDbAdapter', () => {
  const fakeDb = {
    returnAllRecords: jest.fn(),
    deleteOneRecord: jest.fn()
  }
  it('calls returnAllRecords when findAll is called', () => {
    const dbAdapter = fakeDbAdapter(fakeDb)
    dbAdapter.getAll()
    expect(fakeDb.returnAllRecords).toHaveBeenCalled()
  })
  it('calls deleteOneRecord when delete is called', () => {
    const dbAdapter = fakeDbAdapter(fakeDb)
    dbAdapter.delete('Joey')
    expect(fakeDb.deleteOneRecord).toHaveBeenCalledWith('Joey')
  })
})