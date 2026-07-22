# PrankShow SDK utility: make_context

from core.context import PrankShowContext


def make_context_util(ctxmap, basectx):
    return PrankShowContext(ctxmap, basectx)
