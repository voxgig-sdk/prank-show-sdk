package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPostEntityFunc func(client *PrankShowSDK, entopts map[string]any) PrankShowEntity

