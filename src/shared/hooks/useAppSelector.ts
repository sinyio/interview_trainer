import { store } from '@/app/appStore';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
