/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion config as dev dependency:
 *    npm install -D @aziontech/config
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from '@aziontech/config'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

module.exports = {
  version: 4,
  build: {
    preset: 'vue',
    polyfills: true
  },
  storage: [
    {
      name: 'hire-css-dev-notes',
      prefix: '20261026200931',
      dir: './.edge/assets',
      workloadsAccess: 'read_only'
    }
  ],
  connectors: [
    {
      name: 'hire-css-dev-notes',
      active: true,
      type: 'storage',
      attributes: {
        bucket: 'hire-css-dev-notes',
        prefix: '20261026200931'
      }
    }
  ],
  applications: [
    {
      name: 'hire-css-dev-notes',
      cache: [
        {
          name: 'hire-css-dev-notes',
          browser: {
            maxAgeSeconds: 7200
          },
          edge: {
            maxAgeSeconds: 7200
          }
        }
      ],
      rules: {
        request: [
          {
            name: 'Deliver Static Assets and Set Cache Policy',
            description:
              'Deliver static assets directly from storage and set cache policy',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument:
                    '\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|ttf|otf|woff|woff2|eot|pdf|doc|docx|xls|xlsx|ppt|pptx|mp4|webm|mp3|wav|ogg|css|js|json|xml|html|txt|csv|zip|rar|7z|tar|gz|webmanifest|map|md|yaml|yml)$'
                }
              ]
            ],
            behaviors: [
              {
                type: 'set_connector',
                attributes: {
                  value: 'hire-css-dev-notes'
                }
              },
              {
                type: 'set_cache_policy',
                attributes: {
                  value: 'hire-css-dev-notes'
                }
              },
              {
                type: 'deliver'
              }
            ]
          },
          {
            name: 'Redirect to index.html',
            description:
              'Handle all routes by rewriting to index.html for client-side routing',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '^\/'
                }
              ]
            ],
            behaviors: [
              {
                type: 'set_connector',
                attributes: {
                  value: 'hire-css-dev-notes'
                }
              },
              {
                type: 'rewrite_request',
                attributes: {
                  value: '/index.html'
                }
              }
            ]
          }
        ],
        response: []
      }
    }
  ],
  workloads: [
    {
      name: 'hire-css-dev-notes',
      active: true,
      infrastructure: 1,
      deployments: [
        {
          name: 'hire-css-dev-notes',
          current: true,
          active: true,
          strategy: {
            type: 'default',
            attributes: {
              application: 'hire-css-dev-notes'
            }
          }
        }
      ]
    }
  ]
}
