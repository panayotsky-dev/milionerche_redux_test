/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { incrementAsync } from './thunks'
/* Types */
export interface CounterSliceState {
  userName:string,
  isAuth:boolean,
  level:number,
  money:number,
  url:string,
  questions:[],
  
  jokers:{
    '50x50':boolean,
    'AudienceHelp':boolean,
    'CallFriend':boolean,
  }
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterSliceState = {
  userName:"",
  isAuth:false,
  level:0,
  money:0,
  url:"",
  questions:[],
  jokers:{
    '50x50':false,
            'AudienceHelp':false,
            'CallFriend':false,
  },  
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    setUser:(state, action: PayloadAction<string>) =>{
      return {
        ...state,
        userName:action.payload,
               
      }
    },
    setAuth:(state)=>{
      return{
        ...state,
        isAuth: true,
      }
       
    },
    levelUp: (state,action :PayloadAction<number>) => {
       state.level = action.payload
       
    },
    addMoney: (state, action: PayloadAction<number>) => {
      state.money = action.payload
    },
    addUrl: (state, action: PayloadAction<string>) => {
      
        
        state.url=action.payload
      
    },
    addQuestions: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        questions:action.payload,
      }
      
    },
    usedJoker:(state) => {
      
    },

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  },
})


