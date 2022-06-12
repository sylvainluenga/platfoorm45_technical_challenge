import { card, cardWhite, marsSymbol, venusSymbol } from '../assets'
import { COLORS } from './colors'

export const genders = [
  {
    id: 1,
    title: 'Male',
    icon: <img alt='male' src={marsSymbol} />
  },
  {
    id: 2,
    title: 'Female',
    icon: <img alt='female' src={venusSymbol} />
  }
]

export const memberShips = [
  {
    id: 1,
    title: 'Classic',
    icon: <img alt='classic' src={cardWhite} />,
    background: COLORS.CharcoalGrey
  },
  {
    id: 2,
    title: 'Silver',
    icon: <img alt='silver' src={card} />,
    background: COLORS.PaleGrey
  },
  {
    id: 3,
    title: 'Gold',
    icon: <img alt='gold' src={card} />,
    background: COLORS.PaleGrey
  }
]
