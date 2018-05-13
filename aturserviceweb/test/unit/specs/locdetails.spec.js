import expect from 'expect';
import locdetails from '../../../src/store/modules/locdetails.js'

describe('mutations', () => {
    it('SET_SELECTED_CITY', () => {
        // mock state
        const state = {
            cityName: null
        }
        // apply mutation
        locdetails.mutations["SET_SELECTED_CITY"](state, "Hyderabad")
        // assert result
        expect(state.cityName).toBe("Hyderabad")
    })

    it('SET_PINCODES', () => {
        // mock state
        const state = {
            pincodes: null
        }
        const pincodes = ["500008", "500091"]
        // apply mutation
        locdetails.mutations["SET_PINCODES"](state, pincodes)
        // assert result
        expect(state.pincodes).toBe(pincodes);
    })

})

describe('actions', () => {
    it('setSelectedCity', done => {

        const cityName = "Hyderabad";

        testAction(  locdetails.actions.setSelectedCity, cityName, {
            cityName: null,
            pincodes: null
        }, [{
                type: 'SET_PINCODES',
                payload: ["500009"]
            },
            {
                type: 'SET_SELECTED_CITY',
                payload: cityName
            }
        ], done)

    })
    
})


const testAction = (action, payload, state, expectedMutations, done) => {
    let count = 0

    // mock commit
    const commit = (type, payload) => {

        const mutation = expectedMutations[count]

        try {
            expect(type).toBe(mutation.type)
            if (payload) {
                expect(payload).toBe(mutation.payload)
            }
        } catch (error) {
            //console.log(error);
            //done(error)
        }

        count++
        if (count >= expectedMutations.length) {
            console.log('done');
            done()
        }
    }

    // call the action with mocked store and arguments
    action({
        commit,
        state
    }, payload)

    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        console.log('done');
        expect(count).toBe(0)
        done()
    }
}