export const usage = `
M.A.R.S. - Magically Augmented Release Scripts

Usage: [options]

Options:
  -h, --help                  Display this message.
  -p, --private-key [key]     The private key used during deployment. You can
                              also use the env variable PRIVATE_KEY.
  -n, --network [string]      The network to run the deployment against. Can be
                              either an Ethereum JSON-RPC url or one of:
                              development, kovan, ropsten, goerli, rinkeby or
                              mainnet. Default: mainnet.
  -i, --infura-key [key]      The Infura api key to use for JSON-RPC. You can
                              also use the env variable INFURA_KEY.
  -a, --alchemy-key [key]     The Alchemy api key to use for JSON-RPC. You can
                              also use the env variable ALCHEMY_KEY.
  -o, --out-file [path]       The file to store information about the
                              deployments. Default: deployments.json.
  -g, --gas-price [gwei]      The gas price in gwei used during deployment.
  -d, --dry-run               Execute against an in-memory node forked from the
                              target network. Use this to test. When specified
                              the --yes flag is always implied.
  -y, --yes                   Do not prompt for confirmation before sending
                              transactions.
  -v, --verify                Verify the contracts on Etherscan.
  -e, --etherscan-key [key]   The Etherscan key to use for verification. You can
                              also use the env variable ETHERSCAN_KEY.
  -w, --waffle-config [path]  The waffle config file to use for verification.
                              Default: waffle.json.
`
export const ALLOWED_OPTIONS = [
  'h',
  'help',
  'p',
  'private-key',
  'n',
  'network',
  'i',
  'infura-key',
  'a',
  'alchemy-key',
  'o',
  'out-file',
  'g',
  'gas-price',
  'd',
  'dry-run',
  'y',
  'yes',
  'v',
  'verify',
  'e',
  'etherscan-key',
  's',
  'sources',
  'w',
  'waffle-config',
]
