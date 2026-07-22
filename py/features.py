# PrankShow SDK feature factory

from feature.base_feature import PrankShowBaseFeature
from feature.test_feature import PrankShowTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PrankShowBaseFeature(),
        "test": lambda: PrankShowTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
