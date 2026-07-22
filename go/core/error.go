package core

type PrankShowError struct {
	IsPrankShowError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPrankShowError(code string, msg string, ctx *Context) *PrankShowError {
	return &PrankShowError{
		IsPrankShowError: true,
		Sdk:              "PrankShow",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PrankShowError) Error() string {
	return e.Msg
}
