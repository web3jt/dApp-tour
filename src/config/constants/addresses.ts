import { ChainId } from "./chainId";
export type AddressMap = Partial<Record<ChainId, string>>;

export const EXAMPLE_ADDRESSES = {
    [ChainId.ETHEREUM]: "",
    [ChainId.GOERLI]: "",
};
