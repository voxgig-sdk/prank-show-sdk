# PrankShow SDK utility: make_context

from prankshow_sdk.core.context import PrankShowContext


def make_context_util(ctxmap, basectx):
    return PrankShowContext(ctxmap, basectx)
