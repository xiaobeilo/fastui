export enum LengthUnit {
  VW = 'vw',
  VH = 'vh',
  PERCENT = '%',
  PX = 'px',
  EM = 'em',
  REM = 'rem'
}

export const lengthUnits = [
  LengthUnit.PX,
  LengthUnit.EM,
  LengthUnit.REM,
  LengthUnit.VW,
  LengthUnit.VH,
  LengthUnit.PERCENT
]

export type LengthUnits = typeof lengthUnits

export enum SemanticsValue {
  AUTO = 'auto',
  INHERIT = 'inherit',
  CENTER = 'center'
}

export const semanticsValues = [
  SemanticsValue.AUTO,
  SemanticsValue.INHERIT,
  SemanticsValue.CENTER
]

export type SemanticsValues = typeof semanticsValues
