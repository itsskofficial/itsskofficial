import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for server-side fetching and data consistency
  stega: {
    enabled: false,
    studioUrl: '/studio'
  }
})