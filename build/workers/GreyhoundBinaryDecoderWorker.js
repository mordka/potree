Potree.workers.greyhoundBinaryDecoder = new Potree.WorkerManager(atob("DQovLyBodHRwOi8vanNwZXJmLmNvbS91aW50OGFycmF5LXZzLWRhdGF2aWV3My8zDQpmdW5jdGlvbiBDdXN0b21WaWV3KGJ1ZmZlcikgew0KCXRoaXMuYnVmZmVyID0gYnVmZmVyOw0KCXRoaXMudTggPSBuZXcgVWludDhBcnJheShidWZmZXIpOw0KDQoJdmFyIHRtcCA9IG5ldyBBcnJheUJ1ZmZlcig0KTsNCgl2YXIgdG1wZiA9IG5ldyBGbG9hdDMyQXJyYXkodG1wKTsNCgl2YXIgdG1wdTggPSBuZXcgVWludDhBcnJheSh0bXApOw0KDQoJdGhpcy5nZXRVaW50MzIgPSBmdW5jdGlvbiAoaSkgew0KCQlyZXR1cm4gKHRoaXMudThbaSszXSA8PCAyNCkgfCAodGhpcy51OFtpKzJdIDw8IDE2KSB8ICh0aGlzLnU4W2krMV0gPDwgOCkgfCB0aGlzLnU4W2ldOw0KCX07DQoNCgl0aGlzLmdldFVpbnQxNiA9IGZ1bmN0aW9uIChpKSB7DQoJCXJldHVybiAodGhpcy51OFtpKzFdIDw8IDgpIHwgdGhpcy51OFtpXTsNCgl9Ow0KDQoJdGhpcy5nZXRGbG9hdCA9IGZ1bmN0aW9uKGkpew0KCQl0bXB1OFswXSA9IHRoaXMudThbaSswXTsNCgkJdG1wdThbMV0gPSB0aGlzLnU4W2krMV07DQoJCXRtcHU4WzJdID0gdGhpcy51OFtpKzJdOw0KCQl0bXB1OFszXSA9IHRoaXMudThbaSszXTsNCg0KCQlyZXR1cm4gdG1wZlswXTsNCgl9Ow0KDQoJdGhpcy5nZXRVaW50OCA9IGZ1bmN0aW9uKGkpew0KCQlyZXR1cm4gdGhpcy51OFtpXTsNCgl9Ow0KfQ0KDQpQb3RyZWUgPSB7fTsNCg0KDQpvbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCl7DQoJdmFyIE5VTV9QT0lOVFNfQllURV9TSVpFID0gNDsNCgkvLyBkZWJ1Z2dlcjsNCg0KCXZhciBidWZmZXIgPSBldmVudC5kYXRhLmJ1ZmZlcjsNCgl2YXIgcG9pbnRBdHRyaWJ1dGVzID0gZXZlbnQuZGF0YS5wb2ludEF0dHJpYnV0ZXM7DQoJdmFyIG51bVBvaW50cyA9IChidWZmZXIuYnl0ZUxlbmd0aCAtIE5VTV9QT0lOVFNfQllURV9TSVpFKSAvIHBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZTsNCgl2YXIgY3YgPSBuZXcgQ3VzdG9tVmlldyhidWZmZXIpOw0KCXZhciB2ZXJzaW9uID0gbmV3IFBvdHJlZS5WZXJzaW9uKGV2ZW50LmRhdGEudmVyc2lvbik7DQoJdmFyIG1pbiA9IGV2ZW50LmRhdGEubWluOw0KCXZhciBtYXggPSBldmVudC5kYXRhLm1heDsNCgl2YXIgbm9kZU9mZnNldCA9IGV2ZW50LmRhdGEub2Zmc2V0Ow0KCXZhciBub2RlT2Zmc2V0ID0gZXZlbnQuZGF0YS5iYk9mZnNldDsNCgl2YXIgc2NhbGUgPSBldmVudC5kYXRhLnNjYWxlOw0KCXZhciB0aWdodEJveE1pbiA9IFsgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWV07DQoJdmFyIHRpZ2h0Qm94TWF4ID0gWyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgXTsNCg0KCXZhciBleHRlbnQgPSB7J3gnOiBtYXhbMF0gLSBtaW5bMF0sICd5JzogbWF4WzFdIC0gbWluWzFdLCAneic6IG1heFsyXSAtIG1pblsyXX07DQoNCgl2YXIgYXR0cmlidXRlQnVmZmVycyA9IHt9Ow0KDQoJdmFyIG9mZnNldCA9IDA7DQoNCglmb3IodmFyIGkgPSAwOyBpIDwgcG9pbnRBdHRyaWJ1dGVzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspew0KCQl2YXIgcG9pbnRBdHRyaWJ1dGUgPSBwb2ludEF0dHJpYnV0ZXMuYXR0cmlidXRlc1tpXTsNCg0KCQlpZihwb2ludEF0dHJpYnV0ZS5uYW1lID09PSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuUE9TSVRJT05fQ0FSVEVTSUFOLm5hbWUpew0KDQoJCQl2YXIgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcihudW1Qb2ludHMqNCozKTsNCgkJCXZhciBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpOw0KDQoJCQlmb3IgKHZhciBqID0gMDsgaiA8IG51bVBvaW50czsgaisrKSB7DQoJCQkJcG9zaXRpb25zWzMqaiswXSA9IChjdi5nZXRVaW50MzIob2Zmc2V0ICsgaipwb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUrMCkgLSBub2RlT2Zmc2V0WzBdKTsNCgkJCQlwb3NpdGlvbnNbMypqKzFdID0gKGN2LmdldFVpbnQzMihvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSs0KSAtIG5vZGVPZmZzZXRbMV0pOw0KCQkJCXBvc2l0aW9uc1szKmorMl0gPSAoY3YuZ2V0VWludDMyKG9mZnNldCArIGoqcG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKzgpIC0gbm9kZU9mZnNldFsyXSk7DQoNCgkJCQl0aWdodEJveE1pblswXSA9IE1hdGgubWluKHRpZ2h0Qm94TWluWzBdLCBwb3NpdGlvbnNbMypqKzBdKTsNCgkJCQl0aWdodEJveE1pblsxXSA9IE1hdGgubWluKHRpZ2h0Qm94TWluWzFdLCBwb3NpdGlvbnNbMypqKzFdKTsNCgkJCQl0aWdodEJveE1pblsyXSA9IE1hdGgubWluKHRpZ2h0Qm94TWluWzJdLCBwb3NpdGlvbnNbMypqKzJdKTsNCg0KCQkJCXRpZ2h0Qm94TWF4WzBdID0gTWF0aC5tYXgodGlnaHRCb3hNYXhbMF0sIHBvc2l0aW9uc1szKmorMF0pOw0KCQkJCXRpZ2h0Qm94TWF4WzFdID0gTWF0aC5tYXgodGlnaHRCb3hNYXhbMV0sIHBvc2l0aW9uc1szKmorMV0pOw0KCQkJCXRpZ2h0Qm94TWF4WzJdID0gTWF0aC5tYXgodGlnaHRCb3hNYXhbMl0sIHBvc2l0aW9uc1szKmorMl0pOw0KCQkJfQ0KCQkJLy8gZGVidWdnZXI7DQoNCgkJCWF0dHJpYnV0ZUJ1ZmZlcnNbcG9pbnRBdHRyaWJ1dGUubmFtZV0gPSB7IGJ1ZmZlcjogYnVmZiwgYXR0cmlidXRlOiBwb2ludEF0dHJpYnV0ZX07DQoNCgkJfWVsc2UgaWYocG9pbnRBdHRyaWJ1dGUubmFtZSA9PT0gUG90cmVlLlBvaW50QXR0cmlidXRlLkNPTE9SX1BBQ0tFRC5uYW1lKXsNCg0KCQkJdmFyIGJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjQqMyk7DQoJCQl2YXIgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShidWZmKTsNCg0KCQkJZm9yKHZhciBqID0gMDsgaiA8IG51bVBvaW50czsgaisrKXsNCgkJCQkvLyBjb25zb2xlLmxvZyhjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDApKTsNCgkJCQkvLyBjb25zb2xlLmxvZyhjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDEpKTsNCgkJCQkvLyBjb25zb2xlLmxvZyhjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDIpKTsNCg0KCQkJCWNvbG9yc1szKmorMF0gPSBjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDApIC8gMjU1Ow0KCQkJCWNvbG9yc1szKmorMV0gPSBjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDEpIC8gMjU1Ow0KCQkJCWNvbG9yc1szKmorMl0gPSBjdi5nZXRVaW50OChvZmZzZXQgKyBqKnBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDIpIC8gMjU1Ow0KCQkJCWNvbG9yc1szKmorNF0gPSAxLjA7DQoJCQl9DQoNCgkJCWF0dHJpYnV0ZUJ1ZmZlcnNbcG9pbnRBdHRyaWJ1dGUubmFtZV0gPSB7IGJ1ZmZlcjogYnVmZiwgYXR0cmlidXRlOiBwb2ludEF0dHJpYnV0ZX07DQoNCgkJfWVsc2UgaWYocG9pbnRBdHRyaWJ1dGUubmFtZSA9PT0gUG90cmVlLlBvaW50QXR0cmlidXRlLklOVEVOU0lUWS5uYW1lKXsNCg0KCQkJdmFyIGJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjQpOw0KCQkJdmFyIGludGVuc2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheShidWZmKTsNCg0KCQkJZm9yKHZhciBqID0gMDsgaiA8IG51bVBvaW50czsgaisrKXsNCgkJCQl2YXIgaW50ZW5zaXR5ID0gY3YuZ2V0VWludDE2KG9mZnNldCArIGoqcG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKTsNCgkJCQlpbnRlbnNpdGllc1tqXSA9IGludGVuc2l0eTsNCgkJCX0NCg0KCQkJYXR0cmlidXRlQnVmZmVyc1twb2ludEF0dHJpYnV0ZS5uYW1lXSA9IHsgYnVmZmVyOiBidWZmLCBhdHRyaWJ1dGU6IHBvaW50QXR0cmlidXRlfTsNCg0KCQl9ZWxzZSBpZihwb2ludEF0dHJpYnV0ZS5uYW1lID09PSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuQ0xBU1NJRklDQVRJT04ubmFtZSl7DQoNCgkJCXZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyo0KTsNCgkJCXZhciBjbGFzc2lmaWNhdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpOw0KDQoJCQlmb3IodmFyIGogPSAwOyBqIDwgbnVtUG9pbnRzOyBqKyspew0KCQkJCXZhciBjbGFzc2lmaWNhdGlvbiA9IGN2LmdldFVpbnQ4KG9mZnNldCArIGoqcG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplKTsNCgkJCQljbGFzc2lmaWNhdGlvbnNbal0gPSBjbGFzc2lmaWNhdGlvbjsNCgkJCX0NCg0KCQkJYXR0cmlidXRlQnVmZmVyc1twb2ludEF0dHJpYnV0ZS5uYW1lXSA9IHsgYnVmZmVyOiBidWZmLCBhdHRyaWJ1dGU6IHBvaW50QXR0cmlidXRlfTsNCg0KCQl9ZWxzZSBpZihwb2ludEF0dHJpYnV0ZS5uYW1lID09PSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuTk9STUFMX1NQSEVSRU1BUFBFRC5uYW1lKXsNCg0KCQkJdmFyIGJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKjQqMyk7DQoJCQl2YXIgbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZik7DQoNCgkJCWZvcih2YXIgaiA9IDA7IGogPCBudW1Qb2ludHM7IGorKyl7DQoJCQkJdmFyIGJ4ID0gY3YuZ2V0VWludDgob2Zmc2V0ICsgaiAqIHBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDApOw0KCQkJCXZhciBieSA9IGN2LmdldFVpbnQ4KG9mZnNldCArIGogKiBwb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUgKyAxKTsNCg0KCQkJCXZhciBleCA9IGJ4IC8gMjU1Ow0KCQkJCXZhciBleSA9IGJ5IC8gMjU1Ow0KDQoJCQkJdmFyIG54ID0gZXggKiAyIC0gMTsNCgkJCQl2YXIgbnkgPSBleSAqIDIgLSAxOw0KCQkJCXZhciBueiA9IDE7DQoJCQkJdmFyIG53ID0gLTE7DQoNCgkJCQl2YXIgbCA9IChueCAqICgtbngpKSArIChueSAqICgtbnkpKSArIChueiAqICgtbncpKTsNCgkJCQlueiA9IGw7DQoJCQkJbnggPSBueCAqIE1hdGguc3FydChsKTsNCgkJCQlueSA9IG55ICogTWF0aC5zcXJ0KGwpOw0KDQoJCQkJbnggPSBueCAqIDI7DQoJCQkJbnkgPSBueSAqIDI7DQoJCQkJbnogPSBueiAqIDIgLSAxOw0KDQoJCQkJbm9ybWFsc1szKmogKyAwXSA9IG54Ow0KCQkJCW5vcm1hbHNbMypqICsgMV0gPSBueTsNCgkJCQlub3JtYWxzWzMqaiArIDJdID0gbno7DQoJCQl9DQoNCgkJCWF0dHJpYnV0ZUJ1ZmZlcnNbcG9pbnRBdHRyaWJ1dGUubmFtZV0gPSB7IGJ1ZmZlcjogYnVmZiwgYXR0cmlidXRlOiBwb2ludEF0dHJpYnV0ZX07DQoJCX1lbHNlIGlmKHBvaW50QXR0cmlidXRlLm5hbWUgPT09IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUxfT0NUMTYubmFtZSl7DQoNCgkJCXZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyo0KjMpOw0KCQkJdmFyIG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpOw0KCQkJZm9yKHZhciBqID0gMDsgaiA8IG51bVBvaW50czsgaisrKXsNCgkJCQl2YXIgYnggPSBjdi5nZXRVaW50OChvZmZzZXQgKyBqICogcG9pbnRBdHRyaWJ1dGVzLmJ5dGVTaXplICsgMCk7DQoJCQkJdmFyIGJ5ID0gY3YuZ2V0VWludDgob2Zmc2V0ICsgaiAqIHBvaW50QXR0cmlidXRlcy5ieXRlU2l6ZSArIDEpOw0KDQoJCQkJdmFyIHUgPSAoYnggLyAyNTUpICogMiAtIDE7DQoJCQkJdmFyIHYgPSAoYnkgLyAyNTUpICogMiAtIDE7DQoNCgkJCQl2YXIgeiA9IDEgLSBNYXRoLmFicyh1KSAtIE1hdGguYWJzKHYpOw0KDQoJCQkJdmFyIHggPSAwOw0KCQkJCXZhciB5ID0gMDsNCgkJCQlpZih6ID49IDApew0KCQkJCQl4ID0gdTsNCgkJCQkJeSA9IHY7DQoJCQkJfWVsc2V7DQoJCQkJCXggPSAtICh2L01hdGguc2lnbih2KSAtIDEpIC8gTWF0aC5zaWduKHUpOw0KCQkJCQl5ID0gLSAodS9NYXRoLnNpZ24odSkgLSAxKSAvIE1hdGguc2lnbih2KTsNCgkJCQl9DQoNCgkJCQl2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7DQoJCQkJeCA9IHggLyBsZW5ndGg7DQoJCQkJeSA9IHkgLyBsZW5ndGg7DQoJCQkJeiA9IHogLyBsZW5ndGg7DQoNCgkJCQlub3JtYWxzWzMqaiArIDBdID0geDsNCgkJCQlub3JtYWxzWzMqaiArIDFdID0geTsNCgkJCQlub3JtYWxzWzMqaiArIDJdID0gejsNCgkJCX0NCgkJCWF0dHJpYnV0ZUJ1ZmZlcnNbcG9pbnRBdHRyaWJ1dGUubmFtZV0gPSB7IGJ1ZmZlcjogYnVmZiwgYXR0cmlidXRlOiBwb2ludEF0dHJpYnV0ZX07DQoJCX1lbHNlIGlmKHBvaW50QXR0cmlidXRlLm5hbWUgPT09IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUwubmFtZSl7DQoNCgkJCXZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyo0KjMpOw0KCQkJdmFyIG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpOw0KCQkJZm9yKHZhciBqID0gMDsgaiA8IG51bVBvaW50czsgaisrKXsNCgkJCQl2YXIgeCA9IGN2LmdldEZsb2F0KG9mZnNldCArIGogKiBwb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUgKyAwKTsNCgkJCQl2YXIgeSA9IGN2LmdldEZsb2F0KG9mZnNldCArIGogKiBwb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUgKyA0KTsNCgkJCQl2YXIgeiA9IGN2LmdldEZsb2F0KG9mZnNldCArIGogKiBwb2ludEF0dHJpYnV0ZXMuYnl0ZVNpemUgKyA4KTsNCg0KCQkJCW5vcm1hbHNbMypqICsgMF0gPSB4Ow0KCQkJCW5vcm1hbHNbMypqICsgMV0gPSB5Ow0KCQkJCW5vcm1hbHNbMypqICsgMl0gPSB6Ow0KCQkJfQ0KCQkJYXR0cmlidXRlQnVmZmVyc1twb2ludEF0dHJpYnV0ZS5uYW1lXSA9IHsgYnVmZmVyOiBidWZmLCBhdHRyaWJ1dGU6IHBvaW50QXR0cmlidXRlfTsNCgkJfQ0KDQoJCW9mZnNldCArPSBwb2ludEF0dHJpYnV0ZS5ieXRlU2l6ZTsNCgl9DQoNCgl2YXIgaW5kaWNlcyA9IG5ldyBBcnJheUJ1ZmZlcihudW1Qb2ludHMqNCk7DQoJdmFyIGlJbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KGluZGljZXMpOw0KCWZvcih2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKyl7DQoJCWlJbmRpY2VzW2ldID0gaTsNCgl9DQoNCgl2YXIgbWVzc2FnZSA9IHsNCgkJYXR0cmlidXRlQnVmZmVyczogYXR0cmlidXRlQnVmZmVycywNCgkJdGlnaHRCb3VuZGluZ0JveDogeyBtaW46IHRpZ2h0Qm94TWluLCBtYXg6IHRpZ2h0Qm94TWF4IH0sDQoJCWluZGljZXM6IGluZGljZXMNCgl9Ow0KDQoJdmFyIHRyYW5zZmVyYWJsZXMgPSBbXTsNCg0KCWZvcih2YXIgcHJvcGVydHkgaW4gbWVzc2FnZS5hdHRyaWJ1dGVCdWZmZXJzKXsNCgkJaWYobWVzc2FnZS5hdHRyaWJ1dGVCdWZmZXJzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSl7DQoJCQl0cmFuc2ZlcmFibGVzLnB1c2gobWVzc2FnZS5hdHRyaWJ1dGVCdWZmZXJzW3Byb3BlcnR5XS5idWZmZXIpOw0KCQl9DQoJfQ0KDQoJdHJhbnNmZXJhYmxlcy5wdXNoKG1lc3NhZ2UuaW5kaWNlcyk7DQoNCglwb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2ZlcmFibGVzKTsNCg0KfTsNCg0KUG90cmVlLlZlcnNpb24gPSBmdW5jdGlvbih2ZXJzaW9uKXsNCgl0aGlzLnZlcnNpb24gPSB2ZXJzaW9uOw0KCXZhciB2bUxlbmd0aCA9ICh2ZXJzaW9uLmluZGV4T2YoIi4iKSA9PT0gLTEpID8gdmVyc2lvbi5sZW5ndGggOiB2ZXJzaW9uLmluZGV4T2YoIi4iKTsNCgl0aGlzLnZlcnNpb25NYWpvciA9IHBhcnNlSW50KHZlcnNpb24uc3Vic3RyKDAsIHZtTGVuZ3RoKSk7DQoJdGhpcy52ZXJzaW9uTWlub3IgPSBwYXJzZUludCh2ZXJzaW9uLnN1YnN0cih2bUxlbmd0aCArIDEpKTsNCglpZih0aGlzLnZlcnNpb25NaW5vci5sZW5ndGggPT09IDApew0KCQl0aGlzLnZlcnNpb25NaW5vciA9IDA7DQoJfQ0KCQ0KfTsNCg0KUG90cmVlLlZlcnNpb24ucHJvdG90eXBlLm5ld2VyVGhhbiA9IGZ1bmN0aW9uKHZlcnNpb24pew0KCXZhciB2ID0gbmV3IFBvdHJlZS5WZXJzaW9uKHZlcnNpb24pOw0KCQ0KCWlmKCB0aGlzLnZlcnNpb25NYWpvciA+IHYudmVyc2lvbk1ham9yKXsNCgkJcmV0dXJuIHRydWU7DQoJfWVsc2UgaWYoIHRoaXMudmVyc2lvbk1ham9yID09PSB2LnZlcnNpb25NYWpvciAmJiB0aGlzLnZlcnNpb25NaW5vciA+IHYudmVyc2lvbk1pbm9yKXsNCgkJcmV0dXJuIHRydWU7DQoJfWVsc2V7DQoJCXJldHVybiBmYWxzZTsNCgl9DQp9Ow0KDQpQb3RyZWUuVmVyc2lvbi5wcm90b3R5cGUuZXF1YWxPckhpZ2hlciA9IGZ1bmN0aW9uKHZlcnNpb24pew0KCXZhciB2ID0gbmV3IFBvdHJlZS5WZXJzaW9uKHZlcnNpb24pOw0KCQ0KCWlmKCB0aGlzLnZlcnNpb25NYWpvciA+IHYudmVyc2lvbk1ham9yKXsNCgkJcmV0dXJuIHRydWU7DQoJfWVsc2UgaWYoIHRoaXMudmVyc2lvbk1ham9yID09PSB2LnZlcnNpb25NYWpvciAmJiB0aGlzLnZlcnNpb25NaW5vciA+PSB2LnZlcnNpb25NaW5vcil7DQoJCXJldHVybiB0cnVlOw0KCX1lbHNlew0KCQlyZXR1cm4gZmFsc2U7DQoJfQ0KfTsNCg0KUG90cmVlLlZlcnNpb24ucHJvdG90eXBlLnVwVG8gPSBmdW5jdGlvbih2ZXJzaW9uKXsNCglyZXR1cm4gIXRoaXMubmV3ZXJUaGFuKHZlcnNpb24pOw0KfTsNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzID0ge307DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLlBPU0lUSU9OX0NBUlRFU0lBTiAJPSAwOwkvLyBmbG9hdCB4LCB5LCB6Ow0KUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VECQk9IDE7CS8vIGJ5dGUgciwgZywgYiwgYTsgCUkgPSBbMCwxXQ0KUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfRkxPQVRTXzEJCT0gMjsJLy8gZmxvYXQgciwgZywgYjsgCQlJID0gWzAsMV0NClBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLkNPTE9SX0ZMT0FUU18yNTUJPSAzOwkvLyBmbG9hdCByLCBnLCBiOyAJCUkgPSBbMCwyNTVdDQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfRkxPQVRTCQk9IDQ7ICAJLy8gZmxvYXQgeCwgeSwgejsNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLkZJTExFUgkJCQk9IDU7DQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5JTlRFTlNJVFkJCQk9IDY7DQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5DTEFTU0lGSUNBVElPTgkJPSA3Ow0KUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuTk9STUFMX1NQSEVSRU1BUFBFRAk9IDg7DQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfT0NUMTYJCT0gOTsNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTAkJCQk9IDEwOw0KDQovKioNCiAqIFNvbWUgdHlwZXMgb2YgcG9zc2libGUgcG9pbnQgYXR0cmlidXRlIGRhdGEgZm9ybWF0cw0KICoNCiAqIEBjbGFzcw0KICovDQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlcyA9IHsNCglEQVRBX1RZUEVfRE9VQkxFCToge29yZGluYWwgOiAwLCBzaXplOiA4fSwNCglEQVRBX1RZUEVfRkxPQVQJCToge29yZGluYWwgOiAxLCBzaXplOiA0fSwNCglEQVRBX1RZUEVfSU5UOAkJOiB7b3JkaW5hbCA6IDIsIHNpemU6IDF9LA0KCURBVEFfVFlQRV9VSU5UOAkJOiB7b3JkaW5hbCA6IDMsIHNpemU6IDF9LA0KCURBVEFfVFlQRV9JTlQxNgkJOiB7b3JkaW5hbCA6IDQsIHNpemU6IDJ9LA0KCURBVEFfVFlQRV9VSU5UMTYJOiB7b3JkaW5hbCA6IDUsIHNpemU6IDJ9LA0KCURBVEFfVFlQRV9JTlQzMgkJOiB7b3JkaW5hbCA6IDYsIHNpemU6IDR9LA0KCURBVEFfVFlQRV9VSU5UMzIJOiB7b3JkaW5hbCA6IDcsIHNpemU6IDR9LA0KCURBVEFfVFlQRV9JTlQ2NAkJOiB7b3JkaW5hbCA6IDgsIHNpemU6IDh9LA0KCURBVEFfVFlQRV9VSU5UNjQJOiB7b3JkaW5hbCA6IDksIHNpemU6IDh9DQp9Ow0KDQp2YXIgaSA9IDA7DQpmb3IodmFyIG9iaiBpbiBQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlcyl7DQoJUG90cmVlLlBvaW50QXR0cmlidXRlVHlwZXNbaV0gPSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlc1tvYmpdOw0KCWkrKzsNCn0NCg0KLyoqDQogKiBBIHNpbmdsZSBwb2ludCBhdHRyaWJ1dGUgc3VjaCBhcyBjb2xvci9ub3JtYWwvLi4gYW5kIGl0cyBkYXRhIGZvcm1hdC9udW1iZXIgb2YgZWxlbWVudHMvLi4uDQogKg0KICogQGNsYXNzDQogKiBAcGFyYW0gbmFtZQ0KICogQHBhcmFtIHR5cGUNCiAqIEBwYXJhbSBzaXplDQogKiBAcmV0dXJucw0KICovDQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB0eXBlLCBudW1FbGVtZW50cyl7DQoJdGhpcy5uYW1lID0gbmFtZTsNCgl0aGlzLnR5cGUgPSB0eXBlOw0KCXRoaXMubnVtRWxlbWVudHMgPSBudW1FbGVtZW50czsNCgl0aGlzLmJ5dGVTaXplID0gdGhpcy5udW1FbGVtZW50cyAqIHRoaXMudHlwZS5zaXplOw0KfTsNCg0KUG90cmVlLlBvaW50QXR0cmlidXRlLlBPU0lUSU9OX0NBUlRFU0lBTiA9IG5ldyBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUoDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLlBPU0lUSU9OX0NBUlRFU0lBTiwNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX0ZMT0FULCAzKTsNCg0KUG90cmVlLlBvaW50QXR0cmlidXRlLlJHQkFfUEFDS0VEID0gbmV3IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZSgNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VELA0KCQlQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfSU5UOCwgNCk7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5DT0xPUl9QQUNLRUQgPSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuUkdCQV9QQUNLRUQ7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5SR0JfUEFDS0VEID0gbmV3IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZSgNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VELA0KCQlQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfSU5UOCwgMyk7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUxfRkxPQVRTID0gbmV3IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZSgNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuTk9STUFMX0ZMT0FUUywNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX0ZMT0FULCAzKTsNCg0KUG90cmVlLlBvaW50QXR0cmlidXRlLkZJTExFUl8xQiA9IG5ldyBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUoDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLkZJTExFUiwNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQ4LCAxKTsNCg0KUG90cmVlLlBvaW50QXR0cmlidXRlLklOVEVOU0lUWSA9IG5ldyBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUoDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLklOVEVOU0lUWSwNCgkJUG90cmVlLlBvaW50QXR0cmlidXRlVHlwZXMuREFUQV9UWVBFX1VJTlQxNiwgMSk7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5DTEFTU0lGSUNBVElPTiA9IG5ldyBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUoDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLkNMQVNTSUZJQ0FUSU9OLA0KCQlQb3RyZWUuUG9pbnRBdHRyaWJ1dGVUeXBlcy5EQVRBX1RZUEVfVUlOVDgsIDEpOw0KDQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuTk9STUFMX1NQSEVSRU1BUFBFRCA9IG5ldyBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUoDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZU5hbWVzLk5PUk1BTF9TUEhFUkVNQVBQRUQsDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9VSU5UOCwgMik7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUxfT0NUMTYgPSBuZXcgUG90cmVlLlBvaW50QXR0cmlidXRlKA0KCQlQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUxfT0NUMTYsDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9VSU5UOCwgMik7DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUwgPSBuZXcgUG90cmVlLlBvaW50QXR0cmlidXRlKA0KCQlQb3RyZWUuUG9pbnRBdHRyaWJ1dGVOYW1lcy5OT1JNQUwsDQoJCVBvdHJlZS5Qb2ludEF0dHJpYnV0ZVR5cGVzLkRBVEFfVFlQRV9GTE9BVCwgMyk7DQoNCi8qKg0KICogT3JkZXJlZCBsaXN0IG9mIFBvaW50QXR0cmlidXRlcyB1c2VkIHRvIGlkZW50aWZ5IGhvdyBwb2ludHMgYXJlIGFsaWduZWQgaW4gYSBidWZmZXIuDQogKg0KICogQGNsYXNzDQogKg0KICovDQpQb3RyZWUuUG9pbnRBdHRyaWJ1dGVzID0gZnVuY3Rpb24ocG9pbnRBdHRyaWJ1dGVzKXsNCgl0aGlzLmF0dHJpYnV0ZXMgPSBbXTsNCgl0aGlzLmJ5dGVTaXplID0gMDsNCgl0aGlzLnNpemUgPSAwOw0KDQoJaWYocG9pbnRBdHRyaWJ1dGVzICE9IG51bGwpew0KCQlmb3IodmFyIGkgPSAwOyBpIDwgcG9pbnRBdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKXsNCgkJCXZhciBwb2ludEF0dHJpYnV0ZU5hbWUgPSBwb2ludEF0dHJpYnV0ZXNbaV07DQoJCQl2YXIgcG9pbnRBdHRyaWJ1dGUgPSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGVbcG9pbnRBdHRyaWJ1dGVOYW1lXTsNCgkJCXRoaXMuYXR0cmlidXRlcy5wdXNoKHBvaW50QXR0cmlidXRlKTsNCgkJCXRoaXMuYnl0ZVNpemUgKz0gcG9pbnRBdHRyaWJ1dGUuYnl0ZVNpemU7DQoJCQl0aGlzLnNpemUrKzsNCgkJfQ0KCX0NCn07DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZXMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHBvaW50QXR0cmlidXRlKXsNCgl0aGlzLmF0dHJpYnV0ZXMucHVzaChwb2ludEF0dHJpYnV0ZSk7DQoJdGhpcy5ieXRlU2l6ZSArPSBwb2ludEF0dHJpYnV0ZS5ieXRlU2l6ZTsNCgl0aGlzLnNpemUrKzsNCn07DQoNClBvdHJlZS5Qb2ludEF0dHJpYnV0ZXMucHJvdG90eXBlLmhhc0NvbG9ycyA9IGZ1bmN0aW9uKCl7DQoJZm9yKHZhciBuYW1lIGluIHRoaXMuYXR0cmlidXRlcyl7DQoJCXZhciBwb2ludEF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTsNCgkJaWYocG9pbnRBdHRyaWJ1dGUubmFtZSA9PT0gUG90cmVlLlBvaW50QXR0cmlidXRlTmFtZXMuQ09MT1JfUEFDS0VEKXsNCgkJCXJldHVybiB0cnVlOw0KCQl9DQoJfQ0KDQoJcmV0dXJuIGZhbHNlOw0KfTsNCg0KUG90cmVlLlBvaW50QXR0cmlidXRlcy5wcm90b3R5cGUuaGFzTm9ybWFscyA9IGZ1bmN0aW9uKCl7DQoJZm9yKHZhciBuYW1lIGluIHRoaXMuYXR0cmlidXRlcyl7DQoJCXZhciBwb2ludEF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTsNCgkJaWYoDQoJCQlwb2ludEF0dHJpYnV0ZSA9PT0gUG90cmVlLlBvaW50QXR0cmlidXRlLk5PUk1BTF9TUEhFUkVNQVBQRUQgfHwNCgkJCXBvaW50QXR0cmlidXRlID09PSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuTk9STUFMX0ZMT0FUUyB8fA0KCQkJcG9pbnRBdHRyaWJ1dGUgPT09IFBvdHJlZS5Qb2ludEF0dHJpYnV0ZS5OT1JNQUwgfHwNCgkJCXBvaW50QXR0cmlidXRlID09PSBQb3RyZWUuUG9pbnRBdHRyaWJ1dGUuTk9STUFMX09DVDE2KXsNCgkJCXJldHVybiB0cnVlOw0KCQl9DQoJfQ0KDQoJcmV0dXJuIGZhbHNlOw0KfTsNCg=="));