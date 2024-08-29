const ss = [
  {
    "type": "space",
    "raw": "\n"
  },
  {
    "type": "heading",
    "raw": "# Título Principal\n\n",
    "depth": 1,
    "text": "Título Principal",
    "tokens": [
      {
        "type": "text",
        "raw": "Título Principal",
        "text": "Título Principal"
      }
    ]
  },
  {
    "type": "heading",
    "raw": "## Subtítulo 1\n\n",
    "depth": 2,
    "text": "Subtítulo 1",
    "tokens": [
      {
        "type": "text",
        "raw": "Subtítulo 1",
        "text": "Subtítulo 1"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Este es un párrafo con **texto en negrita**, *texto en cursiva*, y ~~texto tachado~~. \nPodemos incluir `código en línea` y combinar estilos como **_negrita y cursiva_**.",
    "text": "Este es un párrafo con **texto en negrita**, *texto en cursiva*, y ~~texto tachado~~. \nPodemos incluir `código en línea` y combinar estilos como **_negrita y cursiva_**.",
    "tokens": [
      {
        "type": "text",
        "raw": "Este es un párrafo con ",
        "text": "Este es un párrafo con "
      },
      {
        "type": "strong",
        "raw": "**texto en negrita**",
        "text": "texto en negrita",
        "tokens": [
          {
            "type": "text",
            "raw": "texto en negrita",
            "text": "texto en negrita"
          }
        ]
      },
      {
        "type": "text",
        "raw": ", ",
        "text": ", "
      },
      {
        "type": "em",
        "raw": "*texto en cursiva*",
        "text": "texto en cursiva",
        "tokens": [
          {
            "type": "text",
            "raw": "texto en cursiva",
            "text": "texto en cursiva"
          }
        ]
      },
      {
        "type": "text",
        "raw": ", y ",
        "text": ", y "
      },
      {
        "type": "del",
        "raw": "~~texto tachado~~",
        "text": "texto tachado",
        "tokens": [
          {
            "type": "text",
            "raw": "texto tachado",
            "text": "texto tachado"
          }
        ]
      },
      {
        "type": "text",
        "raw": ".",
        "text": "."
      },
      {
        "type": "br",
        "raw": " \n"
      },
      {
        "type": "text",
        "raw": "Podemos incluir ",
        "text": "Podemos incluir "
      },
      {
        "type": "codespan",
        "raw": "`código en línea`",
        "text": "código en línea"
      },
      {
        "type": "text",
        "raw": " y combinar estilos como ",
        "text": " y combinar estilos como "
      },
      {
        "type": "strong",
        "raw": "**_negrita y cursiva_**",
        "text": "_negrita y cursiva_",
        "tokens": [
          {
            "type": "em",
            "raw": "_negrita y cursiva_",
            "text": "negrita y cursiva",
            "tokens": [
              {
                "type": "text",
                "raw": "negrita y cursiva",
                "text": "negrita y cursiva"
              }
            ]
          }
        ]
      },
      {
        "type": "text",
        "raw": ".",
        "text": "."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "También puedes ver listas anidadas:",
    "text": "También puedes ver listas anidadas:",
    "tokens": [
      {
        "type": "text",
        "raw": "También puedes ver listas anidadas:",
        "text": "También puedes ver listas anidadas:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "list",
    "raw": "1. Elemento de lista numerada\n - Sub-elemento de lista con guiones\n 1. Sub-sub-elemento numerado\n 2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
    "ordered": true,
    "start": 1,
    "loose": false,
    "items": [
      {
        "type": "list_item",
        "raw": "1. Elemento de lista numerada\n - Sub-elemento de lista con guiones\n 1. Sub-sub-elemento numerado\n 2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
        "task": false,
        "loose": false,
        "text": "Elemento de lista numerada\n- Sub-elemento de lista con guiones\n 1. Sub-sub-elemento numerado\n 2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
        "tokens": [
          {
            "type": "text",
            "raw": "Elemento de lista numerada\n",
            "text": "Elemento de lista numerada",
            "tokens": [
              {
                "type": "text",
                "raw": "Elemento de lista numerada",
                "text": "Elemento de lista numerada"
              }
            ]
          },
          {
            "type": "list",
            "raw": "- Sub-elemento de lista con guiones\n 1. Sub-sub-elemento numerado\n 2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
            "ordered": false,
            "start": "",
            "loose": false,
            "items": [
              {
                "type": "list_item",
                "raw": "- Sub-elemento de lista con guiones\n 1. Sub-sub-elemento numerado\n 2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
                "task": false,
                "loose": false,
                "text": "Sub-elemento de lista con guiones\n1. Sub-sub-elemento numerado\n2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
                "tokens": [
                  {
                    "type": "text",
                    "raw": "Sub-elemento de lista con guiones\n",
                    "text": "Sub-elemento de lista con guiones",
                    "tokens": [
                      {
                        "type": "text",
                        "raw": "Sub-elemento de lista con guiones",
                        "text": "Sub-elemento de lista con guiones"
                      }
                    ]
                  },
                  {
                    "type": "list",
                    "raw": "1. Sub-sub-elemento numerado\n2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
                    "ordered": true,
                    "start": 1,
                    "loose": false,
                    "items": [
                      {
                        "type": "list_item",
                        "raw": "1. Sub-sub-elemento numerado\n",
                        "task": false,
                        "loose": false,
                        "text": "Sub-sub-elemento numerado",
                        "tokens": [
                          {
                            "type": "text",
                            "raw": "Sub-sub-elemento numerado",
                            "text": "Sub-sub-elemento numerado",
                            "tokens": [
                              {
                                "type": "text",
                                "raw": "Sub-sub-elemento numerado",
                                "text": "Sub-sub-elemento numerado"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "list_item",
                        "raw": "2. Otro sub-sub-elemento\n - Sub-sub-sub-elemento con guiones",
                        "task": false,
                        "loose": false,
                        "text": "Otro sub-sub-elemento\n- Sub-sub-sub-elemento con guiones",
                        "tokens": [
                          {
                            "type": "text",
                            "raw": "Otro sub-sub-elemento\n",
                            "text": "Otro sub-sub-elemento",
                            "tokens": [
                              {
                                "type": "text",
                                "raw": "Otro sub-sub-elemento",
                                "text": "Otro sub-sub-elemento"
                              }
                            ]
                          },
                          {
                            "type": "list",
                            "raw": "- Sub-sub-sub-elemento con guiones",
                            "ordered": false,
                            "start": "",
                            "loose": false,
                            "items": [
                              {
                                "type": "list_item",
                                "raw": "- Sub-sub-sub-elemento con guiones",
                                "task": false,
                                "loose": false,
                                "text": "Sub-sub-sub-elemento con guiones",
                                "tokens": [
                                  {
                                    "type": "text",
                                    "raw": "Sub-sub-sub-elemento con guiones",
                                    "text": "Sub-sub-sub-elemento con guiones",
                                    "tokens": [
                                      {
                                        "type": "text",
                                        "raw": "Sub-sub-sub-elemento con guiones",
                                        "text": "Sub-sub-sub-elemento con guiones"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "### Subtítulo 2\n\n",
    "depth": 3,
    "text": "Subtítulo 2",
    "tokens": [
      {
        "type": "text",
        "raw": "Subtítulo 2",
        "text": "Subtítulo 2"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "A continuación, un párrafo con varios tipos de enlaces:",
    "text": "A continuación, un párrafo con varios tipos de enlaces:",
    "tokens": [
      {
        "type": "text",
        "raw": "A continuación, un párrafo con varios tipos de enlaces:",
        "text": "A continuación, un párrafo con varios tipos de enlaces:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "list",
    "raw": "- [Enlace con título](https://www.example.com \"Este es un título\")\n- [Enlace directo](https://www.example.com)\n- Enlace automático: <https://www.example.com>\n- Enlace a una sección dentro del documento: [Ir a Subtítulo 3](#subtítulo-3)",
    "ordered": false,
    "start": "",
    "loose": false,
    "items": [
      {
        "type": "list_item",
        "raw": "- [Enlace con título](https://www.example.com \"Este es un título\")\n",
        "task": false,
        "loose": false,
        "text": "[Enlace con título](https://www.example.com \"Este es un título\")",
        "tokens": [
          {
            "type": "text",
            "raw": "[Enlace con título](https://www.example.com \"Este es un título\")",
            "text": "[Enlace con título](https://www.example.com \"Este es un título\")",
            "tokens": [
              {
                "type": "link",
                "raw": "[Enlace con título](https://www.example.com \"Este es un título\")",
                "href": "https://www.example.com",
                "title": "Este es un título",
                "text": "Enlace con título",
                "tokens": [
                  {
                    "type": "text",
                    "raw": "Enlace con título",
                    "text": "Enlace con título"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "- [Enlace directo](https://www.example.com)\n",
        "task": false,
        "loose": false,
        "text": "[Enlace directo](https://www.example.com)",
        "tokens": [
          {
            "type": "text",
            "raw": "[Enlace directo](https://www.example.com)",
            "text": "[Enlace directo](https://www.example.com)",
            "tokens": [
              {
                "type": "link",
                "raw": "[Enlace directo](https://www.example.com)",
                "href": "https://www.example.com",
                "title": null,
                "text": "Enlace directo",
                "tokens": [
                  {
                    "type": "text",
                    "raw": "Enlace directo",
                    "text": "Enlace directo"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "- Enlace automático: <https://www.example.com>\n",
        "task": false,
        "loose": false,
        "text": "Enlace automático: <https://www.example.com>",
        "tokens": [
          {
            "type": "text",
            "raw": "Enlace automático: <https://www.example.com>",
            "text": "Enlace automático: <https://www.example.com>",
            "tokens": [
              {
                "type": "text",
                "raw": "Enlace automático: ",
                "text": "Enlace automático: "
              },
              {
                "type": "link",
                "raw": "<https://www.example.com>",
                "text": "https://www.example.com",
                "href": "https://www.example.com",
                "tokens": [
                  {
                    "type": "text",
                    "raw": "https://www.example.com",
                    "text": "https://www.example.com"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "- Enlace a una sección dentro del documento: [Ir a Subtítulo 3](#subtítulo-3)",
        "task": false,
        "loose": false,
        "text": "Enlace a una sección dentro del documento: [Ir a Subtítulo 3](#subtítulo-3)",
        "tokens": [
          {
            "type": "text",
            "raw": "Enlace a una sección dentro del documento: [Ir a Subtítulo 3](#subtítulo-3)",
            "text": "Enlace a una sección dentro del documento: [Ir a Subtítulo 3](#subtítulo-3)",
            "tokens": [
              {
                "type": "text",
                "raw": "Enlace a una sección dentro del documento: ",
                "text": "Enlace a una sección dentro del documento: "
              },
              {
                "type": "link",
                "raw": "[Ir a Subtítulo 3](#subtítulo-3)",
                "href": "#subtítulo-3",
                "title": null,
                "text": "Ir a Subtítulo 3",
                "tokens": [
                  {
                    "type": "text",
                    "raw": "Ir a Subtítulo 3",
                    "text": "Ir a Subtítulo 3"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "También puedes insertar imágenes:",
    "text": "También puedes insertar imágenes:",
    "tokens": [
      {
        "type": "text",
        "raw": "También puedes insertar imágenes:",
        "text": "También puedes insertar imágenes:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "![Imagen de ejemplo](https://via.placeholder.com/300 \"Texto alternativo\")",
    "text": "![Imagen de ejemplo](https://via.placeholder.com/300 \"Texto alternativo\")",
    "tokens": [
      {
        "type": "image",
        "raw": "![Imagen de ejemplo](https://via.placeholder.com/300 \"Texto alternativo\")",
        "href": "https://via.placeholder.com/300",
        "title": "Texto alternativo",
        "text": "Imagen de ejemplo"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "#### Subtítulo 3\n\n",
    "depth": 4,
    "text": "Subtítulo 3",
    "tokens": [
      {
        "type": "text",
        "raw": "Subtítulo 3",
        "text": "Subtítulo 3"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Aquí hay un bloque de código en varios lenguajes:",
    "text": "Aquí hay un bloque de código en varios lenguajes:",
    "tokens": [
      {
        "type": "text",
        "raw": "Aquí hay un bloque de código en varios lenguajes:",
        "text": "Aquí hay un bloque de código en varios lenguajes:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "code",
    "raw": "```javascript\n// Bloque de código en JavaScript\nfunction saludo() {\n console.log(\"Hola, Mundo!\");\n}\n```",
    "lang": "javascript",
    "text": "// Bloque de código en JavaScript\nfunction saludo() {\n console.log(\"Hola, Mundo!\");\n}"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "code",
    "raw": "```python\n# Bloque de código en Python\ndef saludo():\n print(\"Hola, Mundo!\")\n```",
    "lang": "python",
    "text": "# Bloque de código en Python\ndef saludo():\n print(\"Hola, Mundo!\")"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "code",
    "raw": "```bash\n# Bloque de código en Bash\necho \"Hola, Mundo!\"\n```",
    "lang": "bash",
    "text": "# Bloque de código en Bash\necho \"Hola, Mundo!\""
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "code",
    "raw": "```html\n<!-- Bloque de código en HTML -->\n<div>\n Hola, Mundo!\n</div>\n```",
    "lang": "html",
    "text": "<!-- Bloque de código en HTML -->\n<div>\n Hola, Mundo!\n</div>"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "##### Subtítulo 4\n\n",
    "depth": 5,
    "text": "Subtítulo 4",
    "tokens": [
      {
        "type": "text",
        "raw": "Subtítulo 4",
        "text": "Subtítulo 4"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Aquí tienes una tabla con alineación y otros detalles:",
    "text": "Aquí tienes una tabla con alineación y otros detalles:",
    "tokens": [
      {
        "type": "text",
        "raw": "Aquí tienes una tabla con alineación y otros detalles:",
        "text": "Aquí tienes una tabla con alineación y otros detalles:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "table",
    "raw": "| Encabezado Izquierda | Encabezado Centro | Encabezado Derecha |\n| :------------------- | :---------------: | -----------------: |\n| Dato 1 | Dato 2 | Dato 3 |\n| Dato 4 | Dato 5 | Dato 6 |\n| **Dato 7** | *Dato 8* | ~~Dato 9~~ |\n\n",
    "header": [
      {
        "text": "Encabezado Izquierda",
        "tokens": [
          {
            "type": "text",
            "raw": "Encabezado Izquierda",
            "text": "Encabezado Izquierda"
          }
        ],
        "header": true,
        "align": "left"
      },
      {
        "text": "Encabezado Centro",
        "tokens": [
          {
            "type": "text",
            "raw": "Encabezado Centro",
            "text": "Encabezado Centro"
          }
        ],
        "header": true,
        "align": "center"
      },
      {
        "text": "Encabezado Derecha",
        "tokens": [
          {
            "type": "text",
            "raw": "Encabezado Derecha",
            "text": "Encabezado Derecha"
          }
        ],
        "header": true,
        "align": "right"
      }
    ],
    "align": [
      "left",
      "center",
      "right"
    ],
    "rows": [
      [
        {
          "text": "Dato 1",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 1",
              "text": "Dato 1"
            }
          ],
          "header": false,
          "align": "left"
        },
        {
          "text": "Dato 2",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 2",
              "text": "Dato 2"
            }
          ],
          "header": false,
          "align": "center"
        },
        {
          "text": "Dato 3",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 3",
              "text": "Dato 3"
            }
          ],
          "header": false,
          "align": "right"
        }
      ],
      [
        {
          "text": "Dato 4",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 4",
              "text": "Dato 4"
            }
          ],
          "header": false,
          "align": "left"
        },
        {
          "text": "Dato 5",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 5",
              "text": "Dato 5"
            }
          ],
          "header": false,
          "align": "center"
        },
        {
          "text": "Dato 6",
          "tokens": [
            {
              "type": "text",
              "raw": "Dato 6",
              "text": "Dato 6"
            }
          ],
          "header": false,
          "align": "right"
        }
      ],
      [
        {
          "text": "**Dato 7**",
          "tokens": [
            {
              "type": "strong",
              "raw": "**Dato 7**",
              "text": "Dato 7",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Dato 7",
                  "text": "Dato 7"
                }
              ]
            }
          ],
          "header": false,
          "align": "left"
        },
        {
          "text": "*Dato 8*",
          "tokens": [
            {
              "type": "em",
              "raw": "*Dato 8*",
              "text": "Dato 8",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Dato 8",
                  "text": "Dato 8"
                }
              ]
            }
          ],
          "header": false,
          "align": "center"
        },
        {
          "text": "~~Dato 9~~",
          "tokens": [
            {
              "type": "del",
              "raw": "~~Dato 9~~",
              "text": "Dato 9",
              "tokens": [
                {
                  "type": "text",
                  "raw": "Dato 9",
                  "text": "Dato 9"
                }
              ]
            }
          ],
          "header": false,
          "align": "right"
        }
      ]
    ]
  },
  {
    "type": "heading",
    "raw": "###### Subtítulo 5\n\n",
    "depth": 6,
    "text": "Subtítulo 5",
    "tokens": [
      {
        "type": "text",
        "raw": "Subtítulo 5",
        "text": "Subtítulo 5"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Bloques de cita pueden anidarse o contener otros formatos:",
    "text": "Bloques de cita pueden anidarse o contener otros formatos:",
    "tokens": [
      {
        "type": "text",
        "raw": "Bloques de cita pueden anidarse o contener otros formatos:",
        "text": "Bloques de cita pueden anidarse o contener otros formatos:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "blockquote",
    "raw": "> Este es un bloque de cita.\n>> Este es un bloque de cita anidado.\n> \n> También puedes incluir **negrita** o *cursiva* dentro de un bloque de cita.",
    "tokens": [
      {
        "type": "paragraph",
        "raw": "Este es un bloque de cita.\n",
        "text": "Este es un bloque de cita.",
        "tokens": [
          {
            "type": "text",
            "raw": "Este es un bloque de cita.",
            "text": "Este es un bloque de cita."
          }
        ]
      },
      {
        "type": "blockquote",
        "raw": "> Este es un bloque de cita anidado.",
        "tokens": [
          {
            "type": "paragraph",
            "raw": "Este es un bloque de cita anidado.",
            "text": "Este es un bloque de cita anidado.",
            "tokens": [
              {
                "type": "text",
                "raw": "Este es un bloque de cita anidado.",
                "text": "Este es un bloque de cita anidado."
              }
            ]
          }
        ],
        "text": "Este es un bloque de cita anidado."
      },
      {
        "type": "space",
        "raw": "\n\n"
      },
      {
        "type": "paragraph",
        "raw": "También puedes incluir **negrita** o *cursiva* dentro de un bloque de cita.",
        "text": "También puedes incluir **negrita** o *cursiva* dentro de un bloque de cita.",
        "tokens": [
          {
            "type": "text",
            "raw": "También puedes incluir ",
            "text": "También puedes incluir "
          },
          {
            "type": "strong",
            "raw": "**negrita**",
            "text": "negrita",
            "tokens": [
              {
                "type": "text",
                "raw": "negrita",
                "text": "negrita"
              }
            ]
          },
          {
            "type": "text",
            "raw": " o ",
            "text": " o "
          },
          {
            "type": "em",
            "raw": "*cursiva*",
            "text": "cursiva",
            "tokens": [
              {
                "type": "text",
                "raw": "cursiva",
                "text": "cursiva"
              }
            ]
          },
          {
            "type": "text",
            "raw": " dentro de un bloque de cita.",
            "text": " dentro de un bloque de cita."
          }
        ]
      }
    ],
    "text": "Este es un bloque de cita.\n> Este es un bloque de cita anidado.\n\nTambién puedes incluir **negrita** o *cursiva* dentro de un bloque de cita."
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "hr",
    "raw": "---"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "### Tareas\n\n",
    "depth": 3,
    "text": "Tareas",
    "tokens": [
      {
        "type": "text",
        "raw": "Tareas",
        "text": "Tareas"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Puedes listar tareas con casillas de verificación:",
    "text": "Puedes listar tareas con casillas de verificación:",
    "tokens": [
      {
        "type": "text",
        "raw": "Puedes listar tareas con casillas de verificación:",
        "text": "Puedes listar tareas con casillas de verificación:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "list",
    "raw": "- [x] Tarea completada\n- [ ] Tarea pendiente\n- [ ] Otra tarea pendiente",
    "ordered": false,
    "start": "",
    "loose": false,
    "items": [
      {
        "type": "list_item",
        "raw": "- [x] Tarea completada\n",
        "task": true,
        "checked": true,
        "loose": false,
        "text": "Tarea completada",
        "tokens": [
          {
            "type": "text",
            "raw": "Tarea completada",
            "text": "Tarea completada",
            "tokens": [
              {
                "type": "text",
                "raw": "Tarea completada",
                "text": "Tarea completada"
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "- [ ] Tarea pendiente\n",
        "task": true,
        "checked": false,
        "loose": false,
        "text": "Tarea pendiente",
        "tokens": [
          {
            "type": "text",
            "raw": "Tarea pendiente",
            "text": "Tarea pendiente",
            "tokens": [
              {
                "type": "text",
                "raw": "Tarea pendiente",
                "text": "Tarea pendiente"
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "- [ ] Otra tarea pendiente",
        "task": true,
        "checked": false,
        "loose": false,
        "text": "Otra tarea pendiente",
        "tokens": [
          {
            "type": "text",
            "raw": "Otra tarea pendiente",
            "text": "Otra tarea pendiente",
            "tokens": [
              {
                "type": "text",
                "raw": "Otra tarea pendiente",
                "text": "Otra tarea pendiente"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "### Detalles y resumen\n\n",
    "depth": 3,
    "text": "Detalles y resumen",
    "tokens": [
      {
        "type": "text",
        "raw": "Detalles y resumen",
        "text": "Detalles y resumen"
      }
    ]
  },
  {
    "type": "html",
    "block": true,
    "raw": "<details>\n<summary>Haz clic para expandir</summary>\n\n",
    "pre": false,
    "text": "<details>\n<summary>Haz clic para expandir</summary>\n\n"
  },
  {
    "type": "paragraph",
    "raw": "Aquí hay más información que está oculta de manera predeterminada.",
    "text": "Aquí hay más información que está oculta de manera predeterminada.",
    "tokens": [
      {
        "type": "text",
        "raw": "Aquí hay más información que está oculta de manera predeterminada.",
        "text": "Aquí hay más información que está oculta de manera predeterminada."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "html",
    "block": true,
    "raw": "</details>\n\n",
    "pre": false,
    "text": "</details>\n\n"
  },
  {
    "type": "heading",
    "raw": "### Notas al pie\n\n",
    "depth": 3,
    "text": "Notas al pie",
    "tokens": [
      {
        "type": "text",
        "raw": "Notas al pie",
        "text": "Notas al pie"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Puedes añadir [referencias][referencia] en tu documento.",
    "text": "Puedes añadir [referencias][referencia] en tu documento.",
    "tokens": [
      {
        "type": "text",
        "raw": "Puedes añadir ",
        "text": "Puedes añadir "
      },
      {
        "type": "link",
        "raw": "[referencias][referencia]",
        "href": "https://www.example.com",
        "title": "Referencia externa",
        "text": "referencias",
        "tokens": [
          {
            "type": "text",
            "raw": "referencias",
            "text": "referencias"
          }
        ]
      },
      {
        "type": "text",
        "raw": " en tu documento.",
        "text": " en tu documento."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "### Emoji\n\n",
    "depth": 3,
    "text": "Emoji",
    "tokens": [
      {
        "type": "text",
        "raw": "Emoji",
        "text": "Emoji"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Añade emojis para dar más expresividad: 😃 🎉 🔥",
    "text": "Añade emojis para dar más expresividad: 😃 🎉 🔥",
    "tokens": [
      {
        "type": "text",
        "raw": "Añade emojis para dar más expresividad: 😃 🎉 🔥",
        "text": "Añade emojis para dar más expresividad: 😃 🎉 🔥"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "### HTML embebido\n\n",
    "depth": 3,
    "text": "HTML embebido",
    "tokens": [
      {
        "type": "text",
        "raw": "HTML embebido",
        "text": "HTML embebido"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "Puedes incluso incluir código HTML para personalizaciones avanzadas:",
    "text": "Puedes incluso incluir código HTML para personalizaciones avanzadas:",
    "tokens": [
      {
        "type": "text",
        "raw": "Puedes incluso incluir código HTML para personalizaciones avanzadas:",
        "text": "Puedes incluso incluir código HTML para personalizaciones avanzadas:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "html",
    "block": true,
    "raw": "<div style=\"color: red; text-align: center;\">\n Esto es HTML embebido con <strong>estilos en línea</strong>.\n</div>\n\n",
    "pre": false,
    "text": "<div style=\"color: red; text-align: center;\">\n Esto es HTML embebido con <strong>estilos en línea</strong>.\n</div>\n\n"
  },
  {
    "type": "heading",
    "raw": "## Fórmulas Matemáticas\n\n",
    "depth": 2,
    "text": "Fórmulas Matemáticas",
    "tokens": [
      {
        "type": "text",
        "raw": "Fórmulas Matemáticas",
        "text": "Fórmulas Matemáticas"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "También puedes usar sintaxis de LaTeX para fórmulas matemáticas:",
    "text": "También puedes usar sintaxis de LaTeX para fórmulas matemáticas:",
    "tokens": [
      {
        "type": "text",
        "raw": "También puedes usar sintaxis de LaTeX para fórmulas matemáticas:",
        "text": "También puedes usar sintaxis de LaTeX para fórmulas matemáticas:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "\\[\nE = mc^2\n\\]",
    "text": "\\[\nE = mc^2\n\\]",
    "tokens": [
      {
        "type": "escape",
        "raw": "\\[",
        "text": "["
      },
      {
        "type": "text",
        "raw": "\nE = mc^2\n",
        "text": "\nE = mc^2\n"
      },
      {
        "type": "escape",
        "raw": "\\]",
        "text": "]"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "Y fórmulas en línea como \\( a^2 + b^2 = c^2 \\).",
    "text": "Y fórmulas en línea como \\( a^2 + b^2 = c^2 \\).",
    "tokens": [
      {
        "type": "text",
        "raw": "Y fórmulas en línea como ",
        "text": "Y fórmulas en línea como "
      },
      {
        "type": "escape",
        "raw": "\\(",
        "text": "("
      },
      {
        "type": "text",
        "raw": " a^2 + b^2 = c^2 ",
        "text": " a^2 + b^2 = c^2 "
      },
      {
        "type": "escape",
        "raw": "\\)",
        "text": ")"
      },
      {
        "type": "text",
        "raw": ".",
        "text": "."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "hr",
    "raw": "---"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "Esto cubre una amplia gama de funcionalidades de Markdown.\n",
    "text": "Esto cubre una amplia gama de funcionalidades de Markdown.",
    "tokens": [
      {
        "type": "text",
        "raw": "Esto cubre una amplia gama de funcionalidades de Markdown.",
        "text": "Esto cubre una amplia gama de funcionalidades de Markdown."
      }
    ]
  }
]