import { atom, selector} from "recoil";

export const CntAtoms = atom({
    key: 'val',
    default: 0
})
export const CntAtomsTwice = selector({
    key: 'valTwice',
    get: ({ get }) => {
        return get(CntAtoms) * 2
    }
})