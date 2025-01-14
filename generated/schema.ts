// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PipeleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PipeleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PipeleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PipeleEntity", id.toString(), this);
    }
  }

  static load(id: string): PipeleEntity | null {
    return changetype<PipeleEntity | null>(store.get("PipeleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get cid(): string {
    let value = this.get("cid");
    return value!.toString();
  }

  set cid(value: string) {
    this.set("cid", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get shared(): Array<string> {
    let value = this.get("shared");
    return value!.toStringArray();
  }

  set shared(value: Array<string>) {
    this.set("shared", Value.fromStringArray(value));
  }
}
