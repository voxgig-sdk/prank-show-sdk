# PrankShow SDK feature factory

from prankshow_sdk.feature.base_feature import PrankShowBaseFeature
from prankshow_sdk.feature.test_feature import PrankShowTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PrankShowBaseFeature(),
        "test": lambda: PrankShowTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
