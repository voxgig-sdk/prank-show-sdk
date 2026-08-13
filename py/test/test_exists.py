# PrankShow SDK exists test

import pytest
from prankshow_sdk import PrankShowSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PrankShowSDK.test(None, None)
        assert testsdk is not None
