import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.WP_GRAPHQL_ENDPOINT!,
  documents: ['src/lib/fragments.ts', "src/lib/qp.ts" ,  "src/lib/graphql-queries.ts"],
  generates: {
    'src/gql/__generated__/': {
      preset: 'client',
      presetConfig: { gqlTagName: 'gql' }
    }
  }
};
export default config;
