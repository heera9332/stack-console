// src/gql/section-types.ts
import type { PageSectionsByUriQuery } from '@/gql/__generated__/graphql';

export type Section =
  NonNullable<PageSectionsByUriQuery['page']>['pageBuilder']['sections'][number];

export type SectionNullable = Section | null | undefined; // WPGraphQL arrays may contain nulls

export type SectionByName<TName extends Section['__typename']> =
  Extract<Section, { __typename: TName }>;
