# PrankShow SDK feature factory

from prankshow_sdk.feature.base_feature import PrankShowBaseFeature
from prankshow_sdk.feature.ratelimit_feature import PrankShowRatelimitFeature
from prankshow_sdk.feature.retry_feature import PrankShowRetryFeature
from prankshow_sdk.feature.test_feature import PrankShowTestFeature
from prankshow_sdk.feature.timeout_feature import PrankShowTimeoutFeature


_FEATURES = {
    "base": lambda: PrankShowBaseFeature(),
    "ratelimit": lambda: PrankShowRatelimitFeature(),
    "retry": lambda: PrankShowRetryFeature(),
    "test": lambda: PrankShowTestFeature(),
    "timeout": lambda: PrankShowTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
